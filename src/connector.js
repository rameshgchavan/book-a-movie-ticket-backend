// setting environment to get MongoDB_URL
const dotEnv = require("dotenv");
dotEnv.config();
const mongoURI = process.env.MONGODB_URL;

// Imported mongoose
const mongoose = require('mongoose');

// Establish mongoose server connection and exported
module.exports = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
