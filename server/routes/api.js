// const express = require('express');
const db = require('../db');
// const router = express.Router();
const path = require("path");

module.exports = function(app) {
    app.get("api/orders", function(req, res){
        res.json(db);
    });
}











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

// router.get('/:order_number', async (req, res, next) => {
//     try {
//         // let results = await db.one(req.params.id);
//         let results = await db.one(req.params.order_number);
//         res.json(results);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
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