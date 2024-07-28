# AfterShip Tracking API library for Node.js

This library allows you to quickly and easily use the AfterShip Tracking API via Node.js.

For updates to this library, see our [GitHub release page](https://github.com/AfterShip/tracking-sdk-nodejs/releases).

If you need support using AfterShip products, please contact support@aftership.com.

## Table of Contents

- [AfterShip Tracking API library for Node.js](#aftership-tracking-api-library-for-nodejs)
  - [Table of Contents](#table-of-contents)
  - [Before you begin](#before-you-begin)
  - [Quick Start](#quick-start)
    - [Installation](#installation)
  - [Constructor](#constructor)
    - [Example](#example)
  - [Rate Limiter](#rate-limiter)
  - [Error Handling](#error-handling)
    - [Error List](#error-list)
  - [Endpoints](#endpoints)
    - [/trackings](#trackings)
    - [/couriers](#couriers)
    - [/estimated-delivery-date](#estimated-delivery-date)
  - [Help](#help)
  - [License](#license)


## Before you begin

Before you begin to integrate:

- [Create an AfterShip account](https://admin.aftership.com/).
- [Create an API key](https://organization.automizely.com/api-keys).
- [Install Node.js](https://nodejs.org/en/download/) version 16 or later.

## Quick Start

### Installation
```bash
npm install --save @aftership/tracking-sdk
```

## Constructor

Create AfterShip instance with options

| Name       | Type   | Required | Description                                                                                                                       |
| ---------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| api_key    | string | ✔        | Your AfterShip API key                                                                                                            |
| auth_type  | enum   |          | Default value: `AuthType.API_KEY` <br > AES authentication: `AuthType.AES` <br > RSA authentication: `AuthType.RSA`               |
| api_secret | string |          | Required if the authentication type is `AuthType.AES` or `AuthType.RSA`                                                           |
| domain     | string |          | AfterShip API domain. Default value: https://api.aftership.com                                                                    |
| user_agent | string |          | User-defined user-agent string, please follow [RFC9110](https://www.rfc-editor.org/rfc/rfc9110#field.user-agent) format standard. |
| proxy      | string |          | HTTP proxy URL to use for requests. <br > Default value: `null` <br > Example: `http://192.168.0.100:8888`                        |
| max_retry  | number |          | Number of retries for each request. Default value: 2. Min is 0, Max is 10.                                                        |
| timeout    | number |          | Timeout for each request in milliseconds.                                                                                         |

### Example

```javascript
// Step 1: Require the AfterShip client
import {AfterShip} from '@aftership/tracking-sdk';
// or
// const {AfterShip} = require('@aftership/tracking-sdk');


// Step 2: Initialize the client object
const aftership = new AfterShip({api_key: 'YOUR_API_KEY'});

// Step 3: Create the request object
const createTrackingRequestBody = {
    tracking_number: '<tracking_number>',
    slug: '<slug>'
};

// Step 4: Make the request
aftership.tracking.createTracking(createTrackingRequestBody)
    .then(tracking => console.log(tracking))
    .catch(error => console.log(error));
```

## Rate Limiter

See the [Rate Limit](https://www.aftership.com/docs/tracking/2024-07/quickstart/rate-limit) to understand the AfterShip rate limit policy.

## Error Handling

The SDK will return an error object when there is any error during the request, with the following specification:

| Name          | Type   | Description                    |
| ------------- | ------ | ------------------------------ |
| message       | string | Detail message of the error    |
| code          | enum   | Error code enum for API Error. |
| meta_code     | number | API response meta code.        |
| status_code   | number | HTTP status code.              |
| response_body | string | API response body.             |


### Error List

| code                              | meta_code       | status_code     | message                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------- | --------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| INVALID_REQUEST                   | 400             | 400             | The request was invalid or cannot be otherwise served.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| INVALID_JSON                      | 4001            | 400             | Invalid JSON data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| TRACKING_ALREADY_EXIST            | 4003            | 400             | Tracking already exists.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| TRACKING_DOES_NOT_EXIST           | 4004            | 404             | Tracking does not exist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| TRACKING_NUMBER_INVALID           | 4005            | 400             | The value of tracking_number is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| TRACKING_REQUIRED                 | 4006            | 400             | tracking object is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| TRACKING_NUMBER_REQUIRED          | 4007            | 400             | tracking_number is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| VALUE_INVALID                     | 4008            | 400             | The value of [field_name] is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| VALUE_REQUIRED                    | 4009            | 400             | [field_name] is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| SLUG_INVALID                      | 4010            | 400             | The value of slug is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| MISSING_OR_INVALID_REQUIRED_FIELD | 4011            | 400             | Missing or invalid value of the required fields for this courier. Besides tracking_number, also required: [field_name]                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| BAD_COURIER                       | 4012            | 400             | The error message will be one of the following:<br/>1. Unable to import shipment as the carrier is not on your approved list for carrier auto-detection. Add the carrier here: https://admin.aftership.com/settings/couriers<br/>2. Unable to import shipment as we don’t recognize the carrier from this tracking number.<br/>3. Unable to import shipment as the tracking number has an invalid format.<br/>4. Unable to import shipment as this carrier is no longer supported.<br/>5. Unable to import shipment as the tracking number does not belong to a carrier in that group. |
| INACTIVE_RETRACK_NOT_ALLOWED      | 4013            | 400             | Retrack is not allowed. You can only retrack an inactive tracking.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| NOTIFICATION_REUQIRED             | 4014            | 400             | notification object is required.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ID_INVALID                        | 4015            | 400             | The value of id is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| RETRACK_ONCE_ALLOWED              | 4016            | 400             | Retrack is not allowed. You can only retrack each shipment once.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| TRACKING_NUMBER_FORMAT_INVALID    | 4017            | 400             | The format of tracking_number is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| API_KEY_INVALID                   | 401             | 401             | The API key is invalid.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| REQUEST_NOT_ALLOWED               | 403             | 403             | The request is understood, but it has been refused or access is not allowed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| NOT_FOUND                         | 404             | 404             | The URI requested is invalid or the resource requested does not exist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TOO_MANY_REQUEST                  | 429             | 429             | You have exceeded the API call rate limit. The default limit is 10 requests per second.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| INTERNAL_ERROR                    | 500 502 503 504 | 500 502 503 504 | Something went wrong on AfterShip's end.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Endpoints

The AfterShip instance has the following properties which are exactly the same as the API endpoints:

- courier - Get a list of our supported couriers.
- tracking - Create trackings, update trackings, and get tracking results.
- estimated-delivery-date - Get estimated delivery date for your order.
  
### /trackings

**POST** /trackings

```javascript
const payload = {
    slug: '<slug>',
    tracking_number: '<tracking_number>',
    title: 'Title Name',
    smses: [
        '+18555072509',
        '+18555072501'
    ],
    emails: [
        '<your_email>',
        '<your_email>'
    ],
    order_id: 'ID 1234',
    order_id_path: 'http://www.aftership.com/order_id=1234',
    custom_fields: {
        'product_name': 'iPhone Case',
        'product_price': 'USD19.99'
    }
};

aftership.tracking
    .createTracking(payload)
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
```

**DELETE** /trackings/:id

```javascript
aftership.tracking
    .deleteTrackingById('<tracking_id>')
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
```

**GET** /trackings

```javascript
aftership.tracking
    .getTrackings({ page: 1, limit: 10, fields: 'slug,tracking_number' })
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
```

**GET** /trackings/:id

```javascript
aftership.tracking
    .getTrackingById('<tracking_id>')
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
```

**PUT** /trackings/:id

```javascript
aftership.tracking
    .updateTrackingById('<tracking_id>',{title: 'New Title123'})
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
```

**POST** /trackings/:id/retrack

```javascript
aftership.tracking
    .retrackTrackingById('<tracking_id>')
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
```

**POST** /trackings/:id/mark-as-completed

```javascript
aftership.tracking
    .markTrackingCompletedById('<tracking_id>', { reason: 'DELIVERED' })
    .then((result) => console.log(result))
    .catch((e) => console.log(e));
```

### /couriers
**GET** /couriers

```javascript
aftership.courier
    .getUserCouriers()
    .then(result => console.log(result))
    .catch(e => console.log(e));
```

**GET** /couriers/all

```javascript
aftership.courier
    .getAllCouriers()
    .then(result => console.log(result))
    .catch(e => console.log(e));
```

**POST** /couriers/detect

```js
aftership.courier
    .detectCourier({ tracking_number: '<tracking_number>' })
    .then(result => console.log(result))
    .catch(e => console.log(e));
```


### /estimated-delivery-date

**POST** /estimated-delivery-date/predict-batch

```javascript
const payload = {
    estimated_delivery_dates: [{
        slug: '<slug>',
        origin_address: { country: '<country>' },
        destination_address: { country: '<country>' },
    }]
};
aftership.estimatedDeliveryDate
    .predictBatch(payload)
    .then(result => console.log(result))
    .catch(e => console.log(e));
```


## Help

If you get stuck, we're here to help:

- [Issue Tracker](https://github.com/AfterShip/tracking-sdk-nodejs/issues) for questions, feature requests, bug reports and general discussion related to this package. Try searching before you create a new issue.
- Contact AfterShip official support via support@aftership.com

## License
Copyright (c) 2024 AfterShip

Licensed under the MIT license.