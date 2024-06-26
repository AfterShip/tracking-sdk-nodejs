/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */
import { TagV1 } from "./TagV1";
import { Tracking } from "./Tracking";

export interface DataTrackingResponseGetMultipleV1 {
    /**
     * Page to show. (Default: 1)
     */
    page?: number;
    /**
     * Number of trackings each page contain. (Default: 100, Max: 200)
     */
    limit?: number;
    /**
     * Number of returned trackings
     */
    count?: number;
    /**
     * Search the content of the tracking record fields: `tracking_number`, `title`, `order_id`, `customer_name`, `custom_fields`, `order_id`, `emails`, `smses`
     */
    keyword?: string;
    /**
     * Unique 
     */
    slug?: string;
    /**
     * Origin country/region of trackings. Use 
     */
    origin?: string[];
    /**
     * Destination country/region of trackings. Use 
     */
    destination?: string[];
    /**
     * Current status of tracking. (
     */
    tag?: TagV1;
    /**
     * Start date and time of trackings created. AfterShip only stores data of 120 days.
     */
    created_at_min?: string;
    /**
     * End date and time of trackings created.
     */
    created_at_max?: string;
    /**
     * Date and time the tracking was last updated
     */
    last_updated_at?: string;
    /**
     * Whether or not the shipment is returned to sender. Value is `true` when any of its checkpoints has subtag `Exception_010` (returning to sender) or `Exception_011` (returned to sender). Otherwise value is `false`
     */
    return_to_sender?: boolean[];
    /**
     * Destination country/region of the tracking detected from the courier. ISO Alpha-3 (three letters). Value will be `null` if the courier doesn&#39;t provide the destination country.
     */
    courier_destination_country_iso3?: string[];
    /**
     * Array of 
     */
    trackings?: Tracking[];
}

