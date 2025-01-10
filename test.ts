// Step 1: Require the AfterShip client
import { AfterShip } from "./src/aftership";
// or
// const {AfterShip} = require('@aftership/tracking-sdk');

// Step 2: Initialize the client object
const aftership = new AfterShip({
  api_key: "asat_870416d3ea2742dba0eb68e23ddfcbe9",
});

// Step 3: Create the request object
const createTrackingRequestBody = {
  tracking_number: "432718269418",
  slug: "fedex",
};

// Step 4: Make the request
for (let i = 0; i < 10; i++) {
    aftership.tracking
        .getTrackingById('64aadd38e5164280bad89241e2038383')
        .then((result) => console.log(result))
        .catch((e) => console.log(e.response_headers));
}
// aftership.tracking
//   .createTracking(createTrackingRequestBody)
//   .then((tracking) => console.log(tracking))
//   .catch((error) => console.log(error));

// aftership.tracking
//     .deleteTrackingById('6bd44ccc82d342d0bab71dfa1dbe367f')
//     .then((result) => console.log(result))
//     .catch((e) => console.log(e));

// const payload = {
//     slug: 'ups',
//     tracking_number: '1ZK7898C1317272039',
//     title: 'Title Name',
//     order_id: 'ID 1234',
//     order_id_path: 'http://www.aftership.com/order_id=1234',
//     custom_fields: {
//         'product_name': 'iPhone Case',
//         'product_price': 'USD19.99'
//     }
// };

// aftership.tracking
//     .createTracking(payload)
//     .then((result) => console.log(result))
//     .catch((e) => console.log(e));

// aftership.tracking
//     .getTrackings({ limit: 10, fields: 'id,slug,tracking_number' })
//     .then((result) => console.log(result))
//     .catch((e) => console.log(e));

// aftership.tracking
//     .updateTrackingById('64aadd38e5164280bad89241e2038383',{title: 'New Title123'})
//     .then((result) => console.log(result))
//     .catch((e) => console.log(e));

// aftership.tracking
//     .getTrackingById('64aadd38e5164280bad89241e2038383')
//     .then((result) => console.log(result))
//     .catch((e) => console.log(e));

// aftership.tracking
//     .retrackTrackingById('64aadd38e5164280bad89241e2038383')
//     .then((result) => console.log(result))
//     .catch((e) => console.log(e));

// aftership.tracking
//     .markTrackingCompletedById('64aadd38e5164280bad89241e2038383', { reason: 'DELIVERED' })
//     .then((result) => console.log(result))
//     .catch((e) => console.log(e));

// aftership.courier
//     .getUserCouriers()
//     .then(result => console.log(result))
//     .catch(e => console.log(e));

// aftership.courier
//     .getAllCouriers()
//     .then(result => console.log(result))
//     .catch(e => console.log(e));

// aftership.courier
//   .detectCourier({ tracking_number: "432718269418" })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));
