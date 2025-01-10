/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */

export interface CourierEstimatedDeliveryDateUpdateTrackingByIdResponse {
  /**
   * The estimated arrival date of the shipment. It reflects the shipment recipient’s timezone and the format may vary based on how the carrier provides it:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
   */
  estimated_delivery_date?: string;
  /**
   * The earliest estimated delivery date of the shipment. It reflects the shipment recipient’s timezone and the format may vary based on how the carrier provides it:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
   */
  estimated_delivery_date_min?: string;
  /**
   * The Latest estimated delivery date of the shipment. It reflects the shipment recipient’s timezone and the format may vary based on how the carrier provides it:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
   */
  estimated_delivery_date_max?: string;
}
