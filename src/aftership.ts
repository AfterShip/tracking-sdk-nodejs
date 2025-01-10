/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
import { TrackingApi } from "./api/Tracking";
import { EstimatedDeliveryDateApi } from "./api/EstimatedDeliveryDate";
import { CourierApi } from "./api/Courier";
import { AftershipError, AfterShipErrorCodes } from "./error";
import { AuthType } from "./lib/authentication";
import {
  DEFAULT_DOMAIN,
  DEFAULT_MAX_RETRY,
  DEFAULT_TIMEOUT,
  DEFAULT_USER_AGENT,
  MAX_MAX_RETRY,
  MIN_MAX_RETRY,
  Request,
} from "./lib/request";
import { parseProxy } from "./utils/parse_proxy";

export interface Options {
  auth_type?: AuthType;
  api_key?: string;
  api_secret?: string;
  domain?: string;
  max_retry?: number;
  timeout?: number;
  user_agent?: string;
  proxy?: string;
}

const SDK_ENV_PREFIX = "AFTERSHIP_TRACKING_SDK";

export class AfterShip {
  public readonly tracking: TrackingApi;
  public readonly estimatedDeliveryDate: EstimatedDeliveryDateApi;
  public readonly courier: CourierApi;
  private readonly options: Options;

  constructor(options?: Options) {
    this.options = options === undefined ? {} : options;

    if (this.options.api_key === undefined) {
      this.options.api_key = process.env[`${SDK_ENV_PREFIX}_API_KEY`];
    }
    if (this.options.api_secret === undefined) {
      this.options.api_secret = process.env[`${SDK_ENV_PREFIX}_API_SECRET`];
    }
    if (this.options.user_agent === undefined) {
      this.options.user_agent = process.env[`${SDK_ENV_PREFIX}_USER_AGENT`];
      if (this.options.user_agent === undefined) {
        this.options.user_agent = DEFAULT_USER_AGENT;
      }
    }
    if (this.options.auth_type === undefined) {
      this.options.auth_type = process.env[
        `${SDK_ENV_PREFIX}_AUTHENTICATION_TYPE`
      ] as AuthType;
      if (this.options.auth_type === undefined) {
        this.options.auth_type = AuthType.API_KEY;
      }
    }
    if (this.options.domain === undefined) {
      this.options.domain = process.env[`${SDK_ENV_PREFIX}_DOMAIN`];
      if (this.options.domain === undefined) {
        this.options.domain = DEFAULT_DOMAIN;
      }
    }
    if (this.options.proxy === undefined) {
      this.options.proxy = process.env[`${SDK_ENV_PREFIX}_PROXY`];
    }
    if (this.options.max_retry === undefined) {
      const env_max_retry = process.env[`${SDK_ENV_PREFIX}_MAX_RETRY`];
      if (env_max_retry === undefined) {
        this.options.max_retry = DEFAULT_MAX_RETRY;
      } else {
        this.options.max_retry = parseInt(env_max_retry);
      }
    }
    if (this.options.timeout === undefined) {
      const env_timeout = process.env[`${SDK_ENV_PREFIX}_TIMEOUT`];
      if (env_timeout === undefined) {
        this.options.timeout = DEFAULT_TIMEOUT;
      } else {
        this.options.timeout = parseInt(env_timeout);
      }
    }

    this.validateOptions();

    const request = new Request({
      auth_type: this.options.auth_type,
      api_key: this.options.api_key,
      api_secret: this.options.api_secret,
      domain: this.options.domain,
      max_retry: this.options.max_retry,
      timeout: this.options.timeout,
      user_agent: this.options.user_agent,
      proxy: parseProxy(this.options.proxy),
    });
    this.tracking = new TrackingApi(request);
    this.estimatedDeliveryDate = new EstimatedDeliveryDateApi(request);
    this.courier = new CourierApi(request);
  }

  private validateOptions() {
    if (this.options.api_key === undefined || this.options.api_key === "") {
      throw new AftershipError(
        "Invalid API key",
        AfterShipErrorCodes.INVALID_API_KEY,
      );
    }
    if (
      (this.options.auth_type === AuthType.AES ||
        this.options.auth_type === AuthType.RSA) &&
      (this.options.api_secret === undefined || this.options.api_secret === "")
    ) {
      throw new AftershipError(
        `Invalid option: auth_type`,
        AfterShipErrorCodes.INVALID_OPTION,
      );
    }
    if (
      this.options.domain &&
      ((this.options.domain.indexOf("http") < 0 &&
        this.options.domain.indexOf("https") < 0) ||
        this.options.domain.endsWith("/"))
    ) {
      throw new AftershipError(
        `Invalid option: domain`,
        AfterShipErrorCodes.INVALID_OPTION,
      );
    }
    if (
      this.options.max_retry !== undefined &&
      (isNaN(this.options.max_retry) ||
        this.options.max_retry > MAX_MAX_RETRY ||
        this.options.max_retry < MIN_MAX_RETRY)
    ) {
      throw new AftershipError(
        `Invalid option: max_retry`,
        AfterShipErrorCodes.INVALID_OPTION,
      );
    }
    if (
      this.options.timeout !== undefined &&
      (isNaN(this.options.timeout) || this.options.timeout < 0)
    ) {
      throw new AftershipError(
        `Invalid option: timeout`,
        AfterShipErrorCodes.INVALID_OPTION,
      );
    }
    if (this.options.proxy !== undefined && this.options.proxy.length === 0) {
      throw new AftershipError(
        `Invalid option: proxy`,
        AfterShipErrorCodes.INVALID_OPTION,
      );
    }
  }
}

export { AuthType, AfterShipErrorCodes, AftershipError };
