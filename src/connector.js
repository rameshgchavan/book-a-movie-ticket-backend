// Local mongoDB URI with collection name
const mongoURI = "mongodb://0.0.0.0:27017/" + "bookMovie";
// Imported mongoose
const mongoose = require('mongoose');
// Imported bookMovieSchema schema
// const { bookMovieSchema } = require('./schema');
// To establish mongoose server connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
// // Model created using book movie schema
// const collection_connection = mongoose.model('bookmovietickets', bookMovieSchema);
// // Exported model 
// exports.connection = collection_connection;
