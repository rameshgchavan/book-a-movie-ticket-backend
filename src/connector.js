require('mongodb');
// Local mongoDB URI with collection name
const dotEnv = require("dotenv");
dotEnv.config();
// const mongoURI = process.env.MONGODB_URL;
const mongoURI = "mongodb://127.0.0.1:27017/" + "bookMovie";
// Imported mongoose
const mongoose = require('mongoose');

// To establish mongoose server connection
const mongoDB = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });

// Exported model 
exports.connection = mongoDB;
