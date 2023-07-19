require('mongodb');
// Local mongoDB URI with collection name
const dotEnv = require("dotenv");
dotEnv.config();
// const mongoURI = process.env.MONGODB_URL;
const mongoURI = "mongodb://127.0.0.1:27017/" + "bookMovie";
// Imported mongoose
let mongoose = require('mongoose');
// Imported bookMovieSchema schema
const { bookMovieSchema } = require('./schema');
// To establish mongoose server connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
// Model created using book movie schema
let collection_connection = mongoose.model('bookmovietickets', bookMovieSchema);
// Exported model 
exports.connection = collection_connection;
