/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */

export interface NextCouriersCreateTrackingRequest {
    /**
     * 
     */
    slug: string;
    /**
     * Tracking number of a shipment.Duplicated tracking numbers, tracking numbers with invalid tracking number format will not be accepted.We only accept tracking numbers with length from 4 to 100We currently support the following characters in a tracking number:- A - Z- 0 - 9- `-` (Hyphen)- . (Period)- _ (Underscore)- / (Slash)
     */
    tracking_number: string;
}

