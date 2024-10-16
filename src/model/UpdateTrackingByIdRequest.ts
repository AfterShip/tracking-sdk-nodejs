/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */

export interface UpdateTrackingByIdRequest {
    /**
     * The phone number(s) to receive sms notifications.  Input `[]` to clear the value of this field. Supports up to 3 phone numbers.
     */
    smses?: string[];
    /**
     * Email address(es) to receive email notifications. Input `[]` to clear the value of this field. Supports up to 3 email addresses.
     */
    emails?: string[];
    /**
     * By default this field shows the `tracking_number`, but you can customize it as you wish with any info (e.g. the order number).
     */
    title?: string;
    /**
     * Customer name of the tracking.
     */
    customer_name?: string;
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
    custom_fields?: {[key: string]: any};
    /**
     * Text field for the note.Input `&#34;&#34;` to clear the value of this field.
     */
    note?: string;
    /**
     * The recipient’s language. If you set up AfterShip notifications in different languages, we use this to send the recipient tracking updates in their preferred language. Use an  to specify the language.
     */
    language?: string;
    /**
     * The promised delivery date of the order. It uses the formats:- YYYY-MM-DD- YYYY-MM-DDTHH:mm:ss- YYYY-MM-DDTHH:mm:ssZ
     */
    order_promised_delivery_date?: string;
    /**
     * Shipment delivery type- `pickup_at_store`- `pickup_at_courier`- `door_to_door`
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
     * Unique code of each courier. Provide a single courier.(https://admin.aftership.com/settings/couriers). Get a list of courier slug using 
     */
    slug?: string;
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
     * A unique, human-readable identifier for the order.
     */
    order_number?: string;
    /**
     * Order date in YYYY-MM-DDTHH:mm:ssZ format. e.g. 2021-07-26T11:23:51-05:00
     */
    order_date?: string;
    /**
     * The carrier service type for the shipment. If you provide info for this field, AfterShip will not update it with info from the carrier.
     */
    shipment_type?: string;
    /**
     * The  for more details.
     */
    origin_country_iso3?: string;
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
    destination_country_iso3?: string;
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
     * The location_id refers to the place where you fulfilled the items.  - If you provide a location_id, the system will automatically use it as the tracking&#39;s origin address. However, passing both location_id and any origin address information simultaneously is not allowed.- Please make sure you add your locations .
     */
    location_id?: string;
    /**
     * The shipping_method string refers to the chosen method for delivering the package. Merchants typically offer various shipping methods to consumers during the checkout process, such as, Local Delivery, Free Express Worldwide Shipping, etc.
     */
    shipping_method?: string;
}

