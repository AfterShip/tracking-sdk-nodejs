/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
import { SlugGroupV1 } from "./SlugGroupV1";
import { LastMileCreateTrackingRequest } from "./LastMileCreateTrackingRequest";
import { CustomersCreateTrackingRequest } from "./CustomersCreateTrackingRequest";

export interface CreateTrackingRequest {
  /**
   * Tracking number of a shipment.Duplicated tracking numbers, tracking numbers with invalid tracking number format will not be accepted.We only accept tracking numbers with length from 4 to 100We currently support the following characters in a tracking number:- A - Z- 0 - 9- `-` (Hyphen)- . (Period)- _ (Underscore)- / (Slash)
   */
  tracking_number: string;
  /**
   * Unique courier code. Get courier codes .
   */
  slug?: string;
  /**
   * By default this field shows the `tracking_number`, but you can customize it as you wish with any info (e.g. the order number).
   */
  title?: string;
  /**
   * A globally-unique identifier for the order.
   */
  order_id?: string;
  /**
   * The URL for the order in your system or store.
   */
  order_id_path?: string;
  /**
   * Custom fields that accept an object with string field. In order to protect the privacy of your customers, do not include any
   */
  custom_fields?: { [key: string]: any };
  /**
   * The recipient’s language. If you set up AfterShip notifications in different languages, we use this to send the recipient tracking updates in their preferred language. Use an  to specify the language.
   */
  language?: string;
  /**
   * The promised delivery date of the order. It uses the formats:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
   */
  order_promised_delivery_date?: string;
  /**
   * Shipment delivery type- pickup_at_store- pickup_at_courier- door_to_door
   */
  delivery_type?: string;
  /**
   * Shipment pickup location for receiver
   */
  pickup_location?: string;
  /**
   * Shipment pickup note for receiver
   */
  pickup_note?: string;
  /**
   * Additional field required by some carriers to retrieve the tracking info. The shipper’s carrier account number. Refer to our article on  for more details.
   */
  tracking_account_number?: string;
  /**
   * Additional field required by some carriers to retrieve the tracking info. A type of tracking credential required by some carriers. Refer to our article on  for more details.
   */
  tracking_key?: string;
  /**
   * The date and time when the shipment is shipped by the merchant and ready for pickup by the carrier. The field supports the following formats:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZThe field serves two key purposes:- Calculate processing time metrics in the Order-to-delivery Analytics dashboard. To ensure accurate analytics, it&#39;s recommended to include timezone information when configuring this value- Required by certain carriers to retrieve tracking information as an additional tracking field.
   */
  tracking_ship_date?: string;
  /**
   * The  for more details.
   */
  origin_country_region?: string;
  /**
   * The state of the sender’s address. This can help AfterShip with various functions like tracking, carrier auto-detection and auto-correction, calculating an EDD, etc.
   */
  origin_state?: string;
  /**
   * The city of the sender’s address. This can help AfterShip with various functions like tracking, carrier auto-detection and auto-correction, calculating an EDD, etc.
   */
  origin_city?: string;
  /**
   * The postal of the sender’s address. This can help AfterShip with various functions like tracking, carrier auto-detection and auto-correction, calculating an EDD, etc.
   */
  origin_postal_code?: string;
  /**
   * The sender address that the shipment is shipping from. This can help AfterShip with various functions like tracking, carrier auto-detection and auto-correction, calculating an EDD, etc.
   */
  origin_raw_location?: string;
  /**
   * The  for more details.
   */
  destination_country_region?: string;
  /**
   * The state of the recipient’s address. This can help AfterShip with various functions like tracking, carrier auto-detection and auto-correction, calculating an EDD, etc. Also the additional field required by some carriers to retrieve the tracking info. The state/province of the recipient’s address. Refer to our article on  for more details.
   */
  destination_state?: string;
  /**
   * The city of the recipient’s address. This can help AfterShip with various functions like tracking, carrier auto-detection and auto-correction, calculating an EDD, etc.
   */
  destination_city?: string;
  /**
   * The postal of the recipient’s address. This can help AfterShip with various functions like tracking, carrier auto-detection and auto-correction, calculating an EDD, etc. Also the additional field required by some carriers to retrieve the tracking info. The postal code of the recipient’s address. Refer to our article on  for more details.
   */
  destination_postal_code?: string;
  /**
   * The shipping address that the shipment is shipping to. This can help AfterShip with various functions like tracking, carrier auto-detection and auto-correction, calculating an EDD, etc.
   */
  destination_raw_location?: string;
  /**
   * Text field for the note
   */
  note?: string;
  /**
   * Slug group is a group of slugs which belong to same courier. For example, when you inpit &#34;fedex-group&#34; as slug_group, AfterShip will detect the tracking with &#34;fedex-uk&#34;, &#34;fedex-fims&#34;, and other slugs which belong to &#34;fedex&#34;. It cannot be used with slug at the same time. (
   */
  slug_group?: SlugGroupV1;
  /**
   * Order date in YYYY-MM-DDTHH:mm:ssZ format. e.g. 2021-07-26T11:23:51-05:00
   */
  order_date?: string;
  /**
   * A unique, human-readable identifier for the order.
   */
  order_number?: string;
  /**
   * The carrier service type for the shipment. If you provide info for this field, AfterShip will not update it with info from the carrier.
   */
  shipment_type?: string;
  /**
   * Used to add tags to your shipments to help categorize and filter them easily.
   */
  shipment_tags?: string[];
  /**
   * If you’ve connected multiple accounts for a single carrier on AfterShip, you can now use the courier_connection_id field to tell AfterShip which carrier account you’ve used to handle a shipment so we can track it. (
   */
  courier_connection_id?: string;
  /**
   * (Legacy) Replaced by `origin_country_region`. Additional field required by some carriers to retrieve the tracking info. The origin country/region of the shipment. Refer to our article on  for more details.
   */
  tracking_origin_country_region?: string;
  /**
   * (Legacy) Replaced by `destination_country_region`. Additional field required by some carriers to retrieve the tracking info. The destination country/region of the shipment. Refer to our article on  for more details.
   */
  tracking_destination_country_region?: string;
  /**
   * (Legacy) Replaced by `destination_postal_code`. Additional field required by some carriers to retrieve the tracking info. The postal code of the recipient’s address. Refer to our article on  for more details.
   */
  tracking_postal_code?: string;
  /**
   * (Legacy) Replaced by `destination_state`. Additional field required by some carriers to retrieve the tracking info. The state/province of the recipient’s address. Refer to our article on  for more details.
   */
  tracking_state?: string;
  /**
   * The location_id refers to the place where you fulfilled the items.  - If you provide a location_id, the system will automatically use it as the tracking&#39;s origin address. However, passing both location_id and any origin address information simultaneously is not allowed.- Please make sure you add your locations .
   */
  location_id?: string;
  /**
   * The shipping_method string refers to the chosen method for delivering the package. Merchants typically offer various shipping methods to consumers during the checkout process, such as, Local Delivery, Free Express Worldwide Shipping, etc
   */
  shipping_method?: string;
  /**
   * This field contains information about the last leg of the shipment, starting from the carrier who hands it over to the last-mile carrier, all the way to delivery. Once AfterShip detects that the shipment involves multiple legs and identifies the last-mile carrier, we will populate the last-mile carrier information in this object. Alternatively, the user can provide this information in this field to specify the last-mile carrier, which is helpful if AfterShip is unable to detect it automatically.
   */
  last_mile?: LastMileCreateTrackingRequest;
  /**
   * The field contains the customer information associated with the tracking. A maximum of three customer objects are allowed.
   */
  customers?: CustomersCreateTrackingRequest[];
}
