const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const host = '0.0.0.0';

const connection = require('./db');

connection.connect();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', require('./controls'));

app.listen(port, host, () => {
  console.log(`Started server: ${host}/${port}`);
});