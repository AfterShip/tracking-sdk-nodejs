/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */

export interface AftershipEstimatedDeliveryDateCreateTrackingResponse {
  /**
   * The estimated arrival date of the shipment.
   */
  estimated_delivery_date?: string;
  /**
   * Indicates the confidence level and associated reason for an AI EDD prediction request. For a comprehensive list of confidence codes, refer to .
   */
  confidence_code?: number;
  /**
   * Earliest estimated delivery date of the shipment.
   */
  estimated_delivery_date_min?: string;
  /**
   * Latest estimated delivery date of the shipment.
   */
  estimated_delivery_date_max?: string;
}
