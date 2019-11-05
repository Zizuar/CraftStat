const express = require('express');
// const db = require('../db');
// // const views = require('../public');
// const router = express.Router();
const path = require('path');

module.exports = function(app) {

    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "localhost.TLD"); // update to match the domain you will make the request from
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });

    app.get("/", function(req, res, next) {
        res.sendFile(path.join(__dirname, "/../public/views/index.html"));
        });
    // app.all('*', (req, res)=>{
    //   res.send("<h1>404: Sorry, this page does not exist")
    // });    
}
// router.get

// router.get('/', async (req, res, next) => {
//     try {
//         res.render('../public/views/index.html')
//         // let results = await db.all();
//         // res.json(results);
//     } catch(e) {
//         // console.log(e);
//         res.sendStatus(500);
//     }
// });

// router.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "/../public/index.html"));
// });

// module.exports = router;