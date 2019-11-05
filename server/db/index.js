const mysql = require('mysql');
// let orderData = {};

const pool = mysql.createPool({
    connectionLimit: 15,
    host : "localhost",
    port : 3306,
    user : "root",
    password : "",
    database : "GCDC_CraftStat",
    multipleStatements : true
});

// let order_number = orderData.QjaX74_p7T3ng0;

let ordersdb = {}

ordersdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM orders', (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

ordersdb.one = (orderData) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM orders WHERE order_number = ?', [orderData], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = ordersdb;
// module.exports = orderData;