const express = require('express');
const bodyParser = require("body-parser");
// const apiRouter = require('./routes/api');
const app = express();
var PORT = process.env.PORT || 3000;

// app.use('/', require('./routes/api'));
// app.use(express.static('public'));

// app.use(express.static(__dirname + '../public/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

require("./routes/api")(app);
require("./routes/html")(app);

// app.use('/api/orders', apiRouter);

app.listen(PORT, () => {
    console.log('LCARS Initialization Completed: Instance Init || "3000"}');
});