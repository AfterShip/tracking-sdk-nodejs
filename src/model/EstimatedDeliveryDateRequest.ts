/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
import { OriginAddressEstimatedDeliveryDateRequest } from "./OriginAddressEstimatedDeliveryDateRequest";
import { DestinationAddressEstimatedDeliveryDateRequest } from "./DestinationAddressEstimatedDeliveryDateRequest";
import { WeightEstimatedDeliveryDateRequest } from "./WeightEstimatedDeliveryDateRequest";
import { EstimatedPickupEstimatedDeliveryDateRequest } from "./EstimatedPickupEstimatedDeliveryDateRequest";

export interface EstimatedDeliveryDateRequest {
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
  origin_address: OriginAddressEstimatedDeliveryDateRequest;
  /**
   * The final destination of the customer where the delivery will be made.
   */
  destination_address: DestinationAddressEstimatedDeliveryDateRequest;
  /**
   * AfterShip uses this object to calculate the total weight of the order.
   */
  weight?: WeightEstimatedDeliveryDateRequest;
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
  estimated_pickup?: EstimatedPickupEstimatedDeliveryDateRequest;
}
