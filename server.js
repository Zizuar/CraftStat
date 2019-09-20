// const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConnection = require("./connection");
const orderRoutes = require("./app/routes/order");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use("/order", orderRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });