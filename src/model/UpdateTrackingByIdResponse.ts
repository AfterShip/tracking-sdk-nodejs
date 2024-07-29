/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
import { ShipmentWeightUpdateTrackingByIdResponse } from "./ShipmentWeightUpdateTrackingByIdResponse";
import { TagV1 } from "./TagV1";
import { Checkpoint } from "./Checkpoint";
import { AftershipEstimatedDeliveryDateUpdateTrackingByIdResponse } from "./AftershipEstimatedDeliveryDateUpdateTrackingByIdResponse";
import { CustomEstimatedDeliveryDateUpdateTrackingByIdResponse } from "./CustomEstimatedDeliveryDateUpdateTrackingByIdResponse";
import { FirstEstimatedDeliveryUpdateTrackingByIdResponse } from "./FirstEstimatedDeliveryUpdateTrackingByIdResponse";
import { LatestEstimatedDeliveryUpdateTrackingByIdResponse } from "./LatestEstimatedDeliveryUpdateTrackingByIdResponse";
import { NextCouriersUpdateTrackingByIdResponse } from "./NextCouriersUpdateTrackingByIdResponse";
import { CarbonEmissionsUpdateTrackingByIdResponse } from "./CarbonEmissionsUpdateTrackingByIdResponse";

export interface UpdateTrackingByIdResponse {
    /**
     * Tracking ID.
     */
    id?: string;
    /**
     * The length of the tracking ID has been increased from 24 characters to 32 characters. We will use the legacy_id field to store the original 24-character tracking ID to maintain compatibility with existing data. Therefore, all tracking endpoints will continue to work with the legacy_id field as before.
     */
    legacy_id?: string;
    /**
     * The date and time the shipment was imported or added to AfterShip. It uses the format `YYYY-MM-DDTHH:mm:ssZ` for the timezone GMT +0.
     */
    created_at?: string;
    /**
     * The date and time the shipment was updated. It uses the format `YYYY-MM-DDTHH:mm:ssZ` for the timezone GMT +0.
     */
    updated_at?: string;
    /**
     * (Legacy) The date and time the shipment was updated. It uses the format `YYYY-MM-DDTHH:mm:ssZ` for the timezone GMT +0.
     */
    last_updated_at?: string;
    /**
     * Tracking number.
     */
    tracking_number?: string;
    /**
     * Unique courier code. When importing a shipment with no courier slug and the tracking number can’t be recognized, the courier will be marked as `unrecognized`. Get courier codes .
     */
    slug?: string;
    /**
     * Whether or not AfterShip will continue tracking the shipments. Value is `false` when tag (status) is `Delivered`, `Expired`, or further updates for 30 days since last update.
     */
    active?: boolean;
    /**
     * Custom fields that accept an object with string field. In order to protect the privacy of your customers, do not include any  in custom fields.
     */
    custom_fields?: {[key: string]: any};
    /**
     * Customer name of the tracking.
     */
    customer_name?: string;
    /**
     * Total transit time in days.- For delivered shipments: Transit time (in days) = Delivered date - Pick-up date- For undelivered shipments: Transit time (in days) = Current date - Pick-up dateValue as `null` for the shipment without pick-up date.
     */
    transit_time?: number;
    /**
     * The  for the origin country/region. E.g. USA for the United States.
     */
    origin_country_iso3?: string;
    /**
     * The state of the sender’s address.
     */
    origin_state?: string;
    /**
     * The city of the sender’s address.
     */
    origin_city?: string;
    /**
     * The postal code of the sender’s address.
     */
    origin_postal_code?: string;
    /**
     * The sender address that the shipment is shipping from.
     */
    origin_raw_location?: string;
    /**
     * The  for the destination country/region. E.g. USA for the United States.
     */
    destination_country_iso3?: string;
    /**
     * The state of the recipient’s address.
     */
    destination_state?: string;
    /**
     * The city of the recipient’s address.
     */
    destination_city?: string;
    /**
     * The postal code of the recipient’s address.
     */
    destination_postal_code?: string;
    /**
     * The shipping address that the shipment is shipping to.
     */
    destination_raw_location?: string;
    /**
     * Destination country/region of the tracking detected from the courier. ISO Alpha-3 (three letters). Value will be `null` if the courier doesn&#39;t provide the destination country.
     */
    courier_destination_country_iso3?: string;
    /**
     * Email address(es) to receive email notifications.
     */
    emails?: string[];
    /**
     * The estimated delivery date provided by the carrier. It uses the shipment recipient’s timezone and the format may differ depending on how the carrier provides it:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
     */
    expected_delivery?: string;
    /**
     * Text field for the note.
     */
    note?: string;
    /**
     * A globally-unique identifier for the order.
     */
    order_id?: string;
    /**
     * The URL for the order in your system or store.
     */
    order_id_path?: string;
    /**
     * The date and time the order was created in your system or store. It uses the format: `YYYY-MM-DDTHH:mm:ssZ` based on whichever timezone you provide.
     */
    order_date?: string;
    /**
     * Number of packages under the tracking.
     */
    shipment_package_count?: number;
    /**
     * The date and time the shipment was picked up by the carrier. It uses the timezone where the pickup occured. The format may differ depending on how the carrier provides it:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
     */
    shipment_pickup_date?: string;
    /**
     * The date and time the shipment was delivered. It uses the shipment recipient’s timezone. The format may differ depending on how the carrier provides it:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
     */
    shipment_delivery_date?: string;
    /**
     * The carrier service type for the shipment.
     */
    shipment_type?: string;
    /**
     * The shipment_weight field represents the total weight of the shipment. In scenarios where the carrier does not provide this information, you can provide the weight to AfterShip. We will prioritize the data provided by the carrier, if available. The shipment weight will be included in the Response and accessed through the GET API, Webhook, and CSV export. It will also be displayed on the AfterShip Tracking admin. Additionally, it plays a significant role in error-free shipment handling and carbon emission calculations, ensuring accurate and informed decision-making
     */
    shipment_weight?: ShipmentWeightUpdateTrackingByIdResponse;
    /**
     * Signed by information for delivered shipment.
     */
    signed_by?: string;
    /**
     * The phone number(s) to receive sms notifications.  Phone number should begin with `+` and `Area Code` before phone number.
     */
    smses?: string[];
    /**
     * Source of how this tracking is added.
     */
    source?: string;
    /**
     * Current status of tracking. (
     */
    tag?: TagV1;
    /**
     * Current subtag of tracking. (
     */
    subtag?: string;
    /**
     * Normalized tracking message. (
     */
    subtag_message?: string;
    /**
     * By default this field shows the `tracking_number`, but you can customize it as you wish with any info (e.g. the order number).
     */
    title?: string;
    /**
     * Number of attempts AfterShip tracks at courier&#39;s system.
     */
    tracked_count?: number;
    /**
     * Indicates if the shipment is trackable till the final destination.Three possible values:- true- false- null
     */
    last_mile_tracking_supported?: boolean;
    /**
     * The recipient’s language. If you set up AfterShip notifications in different languages, we use this to send the recipient tracking updates in their preferred language.
     */
    language?: string;
    /**
     * Deprecated
     */
    unique_token?: string;
    /**
     * Array of checkpoint object describes the checkpoint information.
     */
    checkpoints?: Checkpoint[];
    /**
     * Phone number(s) subscribed to receive sms notifications.
     */
    subscribed_smses?: string[];
    /**
     * Email address(es) subscribed to receive email notifications.
     */
    subscribed_emails?: string[];
    /**
     * Whether or not the shipment is returned to sender. Value is `true` when any of its checkpoints has subtag `Exception_010` (returning to sender) or `Exception_011` (returned to sender). Otherwise value is `false`.
     */
    return_to_sender?: boolean;
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
     * Official tracking URL of the courier (if any). The language parameter of this link relies on the destination country/region and the language associated with the shipment, if the data regarding the destination country/region and language of the shipment is not available, AfterShip will set the language parameter of the link to &#34;US&#34; by default.
     */
    courier_tracking_link?: string;
    /**
     * The date and time of the carrier’s first attempt to deliver the package to the recipient.  It uses the shipment recipient’s timezone. The format may differ depending on how the carrier provides it:- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
     */
    first_attempted_at?: string;
    /**
     * Delivery instructions (delivery date or address) can be modified by visiting the link if supported by a carrier. The language parameter of this link relies on the destination country/region and the language associated with the shipment, if the data regarding the destination country/region and language of the shipment is not available, AfterShip will set the language parameter of the link to &#34;US&#34; by default.
     */
    courier_redirect_link?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The shipper’s carrier account number. Refer to our article on  for more details.
     */
    tracking_account_number?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. A type of tracking credential required by some carriers. Refer to our article on  for more details.
     */
    tracking_key?: string;
    /**
     * Additional field required by some carriers to retrieve the tracking info. The date the shipment was sent, using the format YYYYMMDD. Refer to our article on  for more details.
     */
    tracking_ship_date?: string;
    /**
     * Whether the tracking is delivered on time or not.
     */
    on_time_status?: string;
    /**
     * The difference days of the on time.
     */
    on_time_difference?: number;
    /**
     * The tags of the order.
     */
    order_tags?: string[];
    /**
     * The estimated delivery date of the shipment provided by AfterShip’s AI and shown to the recipients. It uses the format `YYYY-MM-DD` based on the shipment recipient’s timezone.
     */
    aftership_estimated_delivery_date?: AftershipEstimatedDeliveryDateUpdateTrackingByIdResponse;
    /**
     * Estimated delivery time of the shipment based on your . It uses the format `YYYY-MM-DD` based on the shipment recipient’s timezone.
     */
    custom_estimated_delivery_date?: CustomEstimatedDeliveryDateUpdateTrackingByIdResponse;
    /**
     * A unique, human-readable identifier for the order.
     */
    order_number?: string;
    /**
     * The shipment’s original estimated delivery date. It could be provided by the carrier, AfterShip AI, or based on your custom settings. The format of carrier EDDs may differ depending on how the carrier provides it:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ AfterShip AI and custom EDDs always use the format `YYYY-MM-DD`. All EDDs use the shipment recipient’s timezone.
     */
    first_estimated_delivery?: FirstEstimatedDeliveryUpdateTrackingByIdResponse;
    /**
     * The most recently calculated estimated delivery date. It could be provided by the carrier, AfterShip AI, or based on your custom settings. The format of carrier EDDs may differ depending on how the carrier provides it:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ AfterShip AI and custom EDDs always use the format `YYYY-MM-DD`. All EDDs use the shipment recipient’s timezone.
     */
    latest_estimated_delivery?: LatestEstimatedDeliveryUpdateTrackingByIdResponse;
    /**
     * Used to add tags to your shipments to help categorize and filter them easily.
     */
    shipment_tags?: string[];
    /**
     * If you have multiple accounts connected for a single carrier on AfterShip, we have introduced the courier_connection_id field to allow you to specify the carrier account associated with each shipment. By providing this information, you enable us to accurately track and monitor your shipments based on the correct carrier account.(&lt;/br&gt;In the event that you do not specify the courier_connection_id, we will handle your shipment using the connection that was created earliest among your connected accounts.
     */
    courier_connection_id?: string;
    /**
     * The next couriers get the second carrier information from user or AfterShip.
     */
    next_couriers?: NextCouriersUpdateTrackingByIdResponse[];
    /**
     * (Legacy) Replaced by `origin_country_iso3`. Additional field required by some carriers to retrieve the tracking info. The origin country/region of the shipment. Refer to our article on  for more details.
     */
    tracking_origin_country?: string;
    /**
     * (Legacy) Replaced by `destination_country_iso3`. Additional field required by some carriers to retrieve the tracking info. The destination country/region of the shipment. Refer to our article on  for more details.
     */
    tracking_destination_country?: string;
    /**
     * (Legacy) Replaced by `destination_postal_code`. Additional field required by some carriers to retrieve the tracking info. The postal code of the recipient’s address. Refer to our article on  for more details.
     */
    tracking_postal_code?: string;
    /**
     * (Legacy) Replaced by `destination_state`. Additional field required by some carriers to retrieve the tracking info. The state/province of the recipient’s address. Refer to our article on  for more details.
     */
    tracking_state?: string;
    /**
     * The model contains the total amount of carbon emissions generated by the shipment. - AfterShip will provide this data only when it is available, and its availability is contingent upon the location and weight information that AfterShip can obtain.- The values will be accessible solely for shipments that have been successfully delivered. However, in the event of a shipping update after the delivery status has been achieved, the value may change.- It’s a paid service and only for Tracking Enterprise users, please contact your customer success manager if you want to know more.
     */
    carbon_emissions?: CarbonEmissionsUpdateTrackingByIdResponse;
    /**
     * The location_id refers to the place where you fulfilled the items.  - If you provide a location_id, the system will automatically use it as the tracking&#39;s origin address. However, passing both location_id and any origin address information simultaneously is not allowed.- Please make sure you add your locations .
     */
    location_id?: string;
    /**
     * The shipping_method string refers to the chosen method for delivering the package. Merchants typically offer various shipping methods to consumers during the checkout process, such as, Local Delivery, Free Express Worldwide Shipping, etc.
     */
    shipping_method?: string;
    /**
     * By dynamically tracking failed delivery attempts during shipment, this field allows you to pinpoint carriers accountable for the most failures. Analyzing the root cause of these failures enables you to improve carriers&#39; delivery standard operating procedures (SOP), leading to an overall enhancement in delivery service quality.
     */
    failed_delivery_attempts?: number;
    /**
     * The signature_requirement field serves the purpose of validating the service option type, specifically proof of delivery. By collecting the recipient&#39;s signature upon delivery, it ensures the package reaches the intended recipient and prevents disputes related to non-delivery or lost packages.&lt;/br&gt;
     */
    signature_requirement?: string;
    /**
     * The delivery location type represents the secure area where the carrier leaves the package, such as a safe place, locker, mailbox, front porch, etc. This information helps ensure the shipment reaches the intended recipient efficiently, minimizing the risk of theft or damage.
     */
    delivery_location_type?: string;
}
