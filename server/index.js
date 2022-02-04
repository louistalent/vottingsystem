const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const urlencoded = require('body-parser').urlencoded;
const cors = require('cors');
// db connect
require('./DB/mysql');

app.use(cors());
const json = require('body-parser');
app.use(json());
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'html');
//Routes
app.use('/', require('./routes/router'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server has started at port " + PORT))