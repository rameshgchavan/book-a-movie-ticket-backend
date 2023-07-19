
require("./src/connector");
// Imported express
const express = require("express");
// Created express object
const app = express();
// Imported body parser
const bodyParser = require("body-parser");
// Created constant port
const port = 8080;
// used body parser into express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Imported cors
const cors = require('cors')
// Used cors into express
app.use(cors())
// Imported API router
const movieAPI = require("./src/api");
// Used API into express
app.use(movieAPI);
// Listening on port 8080
app.listen(port, () => console.log(`App listening on port ${port}!`));