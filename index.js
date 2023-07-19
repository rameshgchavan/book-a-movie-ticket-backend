require("./src/connector");

// setting environment to get PORT
const dotEnv = require("dotenv");
dotEnv.config();
const PORT = process.env.PORT;

// Imported express
const express = require("express");
// Created express object
const app = express();
// Imported body parser
const bodyParser = require("body-parser");
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

// Listen on availabe PORT 8080
app.listen(PORT, () => {
    try {
        console.log(`App listening on port ${PORT}!`);
    }
    catch (err) {
        console.log("Connection failed for reason: " + err);
    }

});