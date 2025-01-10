/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */

export interface LastMileDeleteTrackingByIdResponse {
  /**
   * The tracking number of the last-mile carrier.
   */
  tracking_number?: string;
  /**
   * The unique code of the carrier responsible for the last-mile of the shipment.  Find all the courier slugs .
   */
  slug?: string;
  /**
   * The transit time for the last-mile of a shipment in days. This field is calculated based on whether the handed_over_to_last_mile_carrier or the received_by_last_mile_carrier event is detected by AfterShip. The handover event date is used to calculate the last-mile transit time.- Last mile transit time (in days)= Delivered date - Handover date
   */
  transit_time?: string;
  /**
   * The field contains the official tracking URL of the last-mile carrier, if available. The language parameter of this link is determined by the destination country/region and the language associated with the shipment. If the destination country/region and language data is unavailable, AfterShip will default the language parameter to &#34;US&#34;.
   */
  courier_tracking_link?: string;
  /**
   * The field provides the link for modifying delivery instructions (such as delivery date and shipping address), if supported by the last-mile carrier. The language parameter of this link is determined by the destination country/region and the language associated with the shipment. If the destination country/region and language data is unavailable, AfterShip will default the language parameter to &#34;US&#34;.
   */
  courier_redirect_link?: string;
  /**
   * The field indicates the source of last-mile carrier.
   */
  source?: string;
}
