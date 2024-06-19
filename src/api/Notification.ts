/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
import { Request } from "../lib/request";
import { AftershipError, AfterShipErrorCodes } from "../error";
import { NotificationRequestV1 } from "../model/NotificationRequestV1";
import { Notification } from "../model/Notification";
import { DeleteNotificationBySlugTrackingNumberQuery } from "../model/DeleteNotificationBySlugTrackingNumberQuery";
import { GetNotificationBySlugTrackingNumberQuery } from "../model/GetNotificationBySlugTrackingNumberQuery";
import { AddNotificationBySlugTrackingNumberQuery } from "../model/AddNotificationBySlugTrackingNumberQuery";

export class NotificationApi {
    private readonly request: Request;

    constructor(request: Request) {
        this.request = request;
    }

    /**
     * Add notification receivers to a tracking number.
     */
    public async addNotificationByTrackingId(tracking_id: string, body: NotificationRequestV1, headers?: {[key: string]: any}): Promise<Notification> {
        if (!tracking_id) {
            throw new AftershipError(
                "Invalid params: tracking_id",
                AfterShipErrorCodes.VALUE_INVALID
            );
        }
        
        return this.request.makeRequest<Notification>({url: `/tracking/2024-04/notifications/${tracking_id}/add`, method: "POST", body, headers, request_legacy_tag: "notification", response_legacy_tag: "notification", is_paging: false})
    }
    /**
     * Remove notification receivers from a tracking number.
     */
    public async deleteNotificationBySlugTrackingNumber(slug: string, tracking_number: string, body: NotificationRequestV1,query?: DeleteNotificationBySlugTrackingNumberQuery, headers?: {[key: string]: any}): Promise<Notification> {
        if (!slug) {
            throw new AftershipError(
                "Invalid params: slug",
                AfterShipErrorCodes.VALUE_INVALID
            );
        }
        if (!tracking_number) {
            throw new AftershipError(
                "Invalid params: tracking_number",
                AfterShipErrorCodes.VALUE_INVALID
            );
        }
        
        return this.request.makeRequest<Notification>({url: `/tracking/2024-04/notifications/${slug}/${tracking_number}/remove`, method: "POST", body, query, headers, request_legacy_tag: "notification", response_legacy_tag: "notification", is_paging: false})
    }
    /**
     * Get contact information for the users to notify when the tracking changes. Please note that only customer receivers will be returned. Any `email`, `sms` or `webhook` that belongs to the Store will not be returned.
     */
    public async getNotificationByTrackingId(tracking_id: string,  headers?: {[key: string]: any}): Promise<Notification> {
        if (!tracking_id) {
            throw new AftershipError(
                "Invalid params: tracking_id",
                AfterShipErrorCodes.VALUE_INVALID
            );
        }
        
        return this.request.makeRequest<Notification>({url: `/tracking/2024-04/notifications/${tracking_id}`, method: "GET", headers, request_legacy_tag: "", response_legacy_tag: "notification", is_paging: false})
    }
    /**
     * Get contact information for the users to notify when the tracking changes. Please note that only customer receivers will be returned. Any `email`, `sms` or `webhook` that belongs to the Store will not be returned.
     */
    public async getNotificationBySlugTrackingNumber(slug: string, tracking_number: string, query?: GetNotificationBySlugTrackingNumberQuery, headers?: {[key: string]: any}): Promise<Notification> {
        if (!slug) {
            throw new AftershipError(
                "Invalid params: slug",
                AfterShipErrorCodes.VALUE_INVALID
            );
        }
        if (!tracking_number) {
            throw new AftershipError(
                "Invalid params: tracking_number",
                AfterShipErrorCodes.VALUE_INVALID
            );
        }
        
        return this.request.makeRequest<Notification>({url: `/tracking/2024-04/notifications/${slug}/${tracking_number}`, method: "GET", query, headers, request_legacy_tag: "", response_legacy_tag: "notification", is_paging: false})
    }
    /**
     * Remove notification receivers from a tracking number.
     */
    public async deleteNotificationByTrackingId(tracking_id: string, body: NotificationRequestV1, headers?: {[key: string]: any}): Promise<Notification> {
        if (!tracking_id) {
            throw new AftershipError(
                "Invalid params: tracking_id",
                AfterShipErrorCodes.VALUE_INVALID
            );
        }
        
        return this.request.makeRequest<Notification>({url: `/tracking/2024-04/notifications/${tracking_id}/remove`, method: "POST", body, headers, request_legacy_tag: "notification", response_legacy_tag: "notification", is_paging: false})
    }
    /**
     * Add notification receivers to a tracking number.
     */
    public async addNotificationBySlugTrackingNumber(slug: string, tracking_number: string, body: NotificationRequestV1,query?: AddNotificationBySlugTrackingNumberQuery, headers?: {[key: string]: any}): Promise<Notification> {
        if (!slug) {
            throw new AftershipError(
                "Invalid params: slug",
                AfterShipErrorCodes.VALUE_INVALID
            );
        }
        if (!tracking_number) {
            throw new AftershipError(
                "Invalid params: tracking_number",
                AfterShipErrorCodes.VALUE_INVALID
            );
        }
        
        return this.request.makeRequest<Notification>({url: `/tracking/2024-04/notifications/${slug}/${tracking_number}/add`, method: "POST", body, query, headers, request_legacy_tag: "notification", response_legacy_tag: "notification", is_paging: false})
    }
}