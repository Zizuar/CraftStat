const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 15,
    host : "localhost",
    port : 3306,
    user : "root",
    password : "9q25O$3@R7T*a5Wp$YP",
    database : "GCDC_CraftStat",
    multipleStatements : true
});

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

ordersdb.one = (order_number) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM orders WHERE order_number = ?', [order_number], (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = ordersdb;