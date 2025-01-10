/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
import { OriginAddressPredictResponse } from "./OriginAddressPredictResponse";
import { DestinationAddressPredictResponse } from "./DestinationAddressPredictResponse";
import { WeightPredictResponse } from "./WeightPredictResponse";
import { EstimatedPickupPredictResponse } from "./EstimatedPickupPredictResponse";

export interface PredictResponse {
  /**
   * A string that acts as a unique identifier for the estimated delivery date value generated by AfterShip Predict API
   */
  id: string;
  /**
   * AfterShip&#39;s unique code of courier. Please refer to https://track.aftership.com/couriers/download.
   */
  slug: string;
  /**
   * AfterShip’s unique code represents carrier’s shipping and delivery options. Refer to .
   */
  service_type_name?: string;
  /**
   * The location from where the package is picked up by the carrier to be delivered to the final destination.
   */
  origin_address: OriginAddressPredictResponse;
  /**
   * The final destination of the customer where the delivery will be made.
   */
  destination_address: DestinationAddressPredictResponse;
  /**
   * AfterShip uses this object to calculate the total weight of the order.
   */
  weight?: WeightPredictResponse;
  /**
   * The number of packages.
   */
  package_count?: number;
  /**
   * The local pickup time in the origin address time zone of the package.Either `pickup_time` or `estimated_pickup` is required.
   */
  pickup_time?: string;
  /**
   * The local pickup time of the package.Either `pickup_time` or `estimated_pickup` is required.
   */
  estimated_pickup?: EstimatedPickupPredictResponse;
  /**
   * The estimated arrival date of the shipment, provided by AfterShip.
   */
  estimated_delivery_date?: string;
  /**
   * Indicates the confidence level and associated reason for an AI EDD prediction request. For a comprehensive list of confidence codes, refer to .
   */
  confidence_code?: number;
  /**
   * The earliest estimated delivery date of the shipment, provided by AfterShip.
   */
  estimated_delivery_date_min?: string;
  /**
   * The latest estimated delivery date of the shipment, provided by AfterShip.
   */
  estimated_delivery_date_max?: string;
}
