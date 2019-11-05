const express = require('express');
const ordersdb = require('../db');
const router = express.Router();
const path = require("path");
// const orderData = require(path.join(__dirname, "/../public/

// console.log("Echo Query Submission: ", orderData)

// let order_number = orderData;

module.exports = function(app) {

    app.use('/api/orders/:orderData', async (req, res, next) => {
        try {
            console.log("Echo Query Submission: ", req);
            // let results = await db.one(req.params.id);
            let results = await ordersdb.one(req.params.orderData);
            console.log(results);
            res.json(results);
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        } next();
    });

    // app.use('api/orders', function(req, res, next) {
    //     let orderData = req.body;
    //     console.log("Echo Query Submission: ", orderData);
    //     });
};

// router.get('/api/orders?:order_number', async (req, res, next) => {
//     try {
//         // let results = await db.one(req.params.id);
//         let results = await db.one(req.params.order_number);
//         res.json(results);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });












// const public = express.static('public');

// router.use(express.static('public'));

// router.get('/', function(req, res) {
//     res.sendFile('./views/index.html');
// });

// router.post('/', function(req, res) {
//     res.send({type: 'POST'});
// });

// router.put('/', function(req, res) {
//     res.send({type: 'PUT'});
// });


// module.exports = function(app) {
// app.get('/api/orders/:order_number', async (req, res, next) => {
//     try {
//         // let results = await db.one(req.params.id);
//         let results = await db.one(req.params.order_number);
//         res.json(results);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });
// };
// module.exports = router;