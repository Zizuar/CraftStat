const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    // port : 3306,
    user : "root",
    password : "",
    database : "GCDC_CraftStat",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("connected");
    }
    else
    {
        console.log("connection failed");
    }
});

module.exports = mysqlConnection;