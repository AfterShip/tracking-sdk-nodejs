/*
 * This code was auto generated by AfterShip SDK Generator.
 * Do not edit the class manually.
 */

export interface OriginAddressPredictResponse {
  /**
   * The country/region of the origin location from where the package is picked up by the carrier to be delivered to the final destination. Use 3 letters of ISO 3166-1 country/region code.
   */
  country_region: string;
  /**
   * State, province, or the equivalent location of the origin address. Use 3 letters of ISO 3166-1 country/region code for countries/regions without state. Either `origin_address.state` or `origin_address.postal_code` is required.
   */
  state?: string;
  /**
   * City of the origin address. Use 3 letters of ISO 3166-1 country/region code for countries/regions without City.
   */
  city?: string;
  /**
   * Postal code of the origin address. Use 3 letters of ISO 3166-1 country/region code for countries/regions without postal code. Either `origin_address.state` or `origin_address.postal_code` is required.
   */
  postal_code?: string;
  /**
   * Raw location of the origin address. A raw address will help AI to identify the accurate location of the origin address.
   */
  raw_location?: string;
}
