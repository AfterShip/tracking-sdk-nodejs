/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
export interface GetTrackingsQuery {
  cursor?: string;
  limit?: number;
  keyword?: string;
  tracking_numbers?: string;
  slug?: string;
  transit_time?: number;
  origin?: string;
  destination?: string;
  tag?: string;
  created_at_min?: string;
  created_at_max?: string;
  updated_at_min?: string;
  updated_at_max?: string;
  fields?: string;
  return_to_sender?: string;
  courier_destination_country_region?: string;
  shipment_tags?: string;
  order_id?: string;
}
