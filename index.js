require("./src/connector");
const mongoURI = "mongodb://127.0.0.1:27017/" + "bookMovie";
// Imported mongoose
const mongoose = require('mongoose');
// Imported bookMovieSchema schema
const { bookMovieSchema } = require('./schema');
// To establish mongoose server connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
// Model created using book movie schema

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected.')
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose not connected: ${err}`)
});
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
app.listen(port, () => {
    try {
        console.log(`App listening on port ${port}!`);
    }
    catch (err) {
        console.log("Connection failed for reason: " + err);
    }

});