const express = require('express');
// const bodyParser = require("body-parser");
const apiRouter = require('./routes');
const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(bodyParser.json());

app.use('/api/orders', apiRouter);

app.listen(PORT, () => {
    console.log('LCARS Initialization Completed: ${process.env.PORT || "3000"}');
});