/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
import axios, { AxiosRequestConfig } from "axios";
import { AuthType, Authentication } from "./authentication";
import { RateLimit } from "./rate_limit";
import { AftershipError } from "../error";
import { AfterShipErrorCodes } from "../error/code";
import { AfterShipMetaCodeMap } from "../error/meta_code";
import { Proxy } from "../utils/parse_proxy";

export const DEFAULT_DOMAIN = "https://api.aftership.com";
export const DEFAULT_TIMEOUT = 10000;
export const DEFAULT_MAX_RETRY = 3;
export const MAX_MAX_RETRY = 10;
export const MIN_MAX_RETRY = 0;
export const DEFAULT_USER_AGENT = "tracking-sdk-nodejs/9.0.0 (https://www.aftership.com) axios/1.7.2";

type ResponseData = {
    meta: {
        code: number;
        message: number;
        type: string;
    },
    data: any;
}

export interface RequestConfig {
    url: string;
    method: string;
    body?: any;
    query?: any;
    headers?: { [key: string]: any };
    request_legacy_tag: string;
    response_legacy_tag: string;
    is_paging: boolean;
}

export interface RequestOptions {
    auth_type: string;
    api_key?: string;
    api_secrect?: string;
    domain: string;
    max_retry: number;
    timeout: number;
    user_agent?: string;
    proxy?: Proxy;
}

export class Request {
    private readonly options: RequestOptions;
    private readonly ratelimit: RateLimit;

    private readonly DELAY_BASE = 3000;

    constructor(options: RequestOptions) {
        this.options = options;
        this.ratelimit = new RateLimit();
    }

    private getHeaders(config: RequestConfig): { [key: string]: any } {
        const content_type = "application/json";
        const headers: { [key: string]: any } = {
            "as-api-key": this.options.api_key,
            "Content-Type": content_type,
            "User-Agent": this.options.user_agent || DEFAULT_USER_AGENT,
            "aftership-client": DEFAULT_USER_AGENT,
            ...config.headers,
        };

        if (
            this.options.auth_type === AuthType.AES ||
            this.options.auth_type === AuthType.RSA
        ) {
            const header_keys = this.options.auth_type === AuthType.AES ? "as-signature-hmac-sha256" : "as-signature-rsa-sha256"
            const date_now = new Date().toUTCString();
            headers[header_keys] = Authentication.sign({
                method: config.method,
                url: config.url,
                body: config.body,
                content_type,
                query: config.query,
                auth_type: this.options.auth_type,
                date: date_now,
                private_key: this.options.api_secrect,
                headers,
            });
            headers["date"] = date_now;
        }
        return headers;
    }

    private shouldRetry(error: any): boolean {
        if (error.code === "ECONNABORTED") {
            return true;
        }
        if (error.response && error.response.status >= 500) {
            return true;
        }
        return false;
    }

    private delayWithJitter(retry_attempt: number): Promise<unknown> {
        const delay = (this.DELAY_BASE * 2) ^ (retry_attempt - 1);

        // jitter between -halfOfTheDelay seconds and halfOfTheDelay seconds
        const jitter = delay * (Math.random() - 0.5);

        // to ensure the delay would not be less than 1 second even if the delayBase is smaller than 2
        const totalDelay = Math.max(1, delay + jitter);

        return new Promise((resolve) => {
            setTimeout(resolve, totalDelay);
        });
    }

    private setRateLimit(headers: any) {
        if (
            headers &&
            headers["x-ratelimit-reset"] !== undefined &&
            headers["x-ratelimit-limit"] !== undefined &&
            headers["x-ratelimit-remaining"] !== undefined
        ) {
            this.ratelimit.ratelimit = {
                x_ratelimit_remaining: headers["x-ratelimit-remaining"],
                x_ratelimit_limit: headers["x-ratelimit-limit"],
                x_ratelimit_reset: headers["x-ratelimit-reset"],
            };
        }
    }

    private async withRetry<T>(requestConfig: AxiosRequestConfig, retry: number = 0): Promise<T> {
        try {
            if (this.ratelimit.isExceeded()) {
                throw new AftershipError(
                    "You have exceeded the API call rate limit. The default limit is 10 requests per second.",
                    AfterShipErrorCodes.RATE_LIMIT_EXCEED
                );
            }
            const response = await axios<T>(requestConfig);
            this.setRateLimit(response.headers);
            return response.data;
        } catch (error: any) {
            if (error.response && error.response.headers) {
                this.setRateLimit(error.response.headers);
            }
            if (this.shouldRetry(error) && retry < this.options.max_retry) {
                await this.delayWithJitter(retry);
                retry++;
                return this.withRetry(requestConfig, retry);
            }
            throw error;
        }
    }

    public async makeRequest<T>(config: RequestConfig): Promise<T> {
        const headers = this.getHeaders(config);
        try {
            const response = await this.withRetry<ResponseData>(
                {
                    url: config.url,
                    method: config.method,
                    headers,
                    params: config.query,
                    validateStatus: (status) => status >= 200 && status < 400,
                    baseURL: this.options.domain,
                    data: this.handleRequestData(config.request_legacy_tag, config.body),
                    timeout: this.options.timeout,
                    proxy: this.options.proxy,
                }
            );
            return this.handleResponseData<T>(config.response_legacy_tag, config.is_paging, response)
        } catch (error) {
            throw this.handleError(error);
        }
    }

    private handleError(e: any): Error {
        if (e.code === "ECONNABORTED") {
            return new AftershipError(
                "Request timed out.",
                AfterShipErrorCodes.TIMED_OUT
            );
        } else if (e instanceof AftershipError) {
            return e;
        } else if (e.response && e.response.status >= 500) {
            return new AftershipError(
                e.response?.data?.meta?.message || e.message,
                AfterShipErrorCodes.INTERNAL_ERROR,
                e.response.status,
                e.response.status,
                JSON.stringify(e.response?.data)
            );
        } else {
            return new AftershipError(
                e.response?.data?.meta?.message,
                AfterShipMetaCodeMap[e.response?.data?.meta?.code?.toString()],
                e.response?.data?.meta?.code,
                e.response?.status,
                JSON.stringify(e.response?.data)
            );
        }
    }

    private handleResponseData<R>(response_legacy_tag: string, is_paging: boolean, data: ResponseData): R {
        if (response_legacy_tag && !is_paging) {
            return data.data[response_legacy_tag];
        }
        if (response_legacy_tag && is_paging) {
            const pagination: any = {
                page: data.data.page,
                limit: data.data.limit,
                has_next_page: data.data.has_next_page,
            };
            let total: any;
            if (data.data.total === undefined) {
                total = data.data.count;
            }
            pagination.total = total;
            return {
                [response_legacy_tag]: data.data[response_legacy_tag],
                pagination,
            } as R
        }
        return data.data;
    }

    private handleRequestData(request_legacy_tag: string, data: any): any {
        if (!request_legacy_tag) {
            return data;
        }
        return {
            [request_legacy_tag]: data
        }
    }
}
