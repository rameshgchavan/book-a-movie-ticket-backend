// Local mongoDB URI with collection name
const mongoURI = "mongodb://127.0.0.1:27017/" + "bookMovie";
// Imported mongoose
const mongoose = require('mongoose');
// Imported bookMovieSchema schema
const { bookMovieSchema } = require('./schema');
// To establish mongoose server connection
const conn = (async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log("connection established with mongodb server online"); })
        .catch(err => {
            console.log("error while connection", err)
        });
    // Model created using book movie schema

    // mongoose.connection.on('connected', () => {
    //     console.log('Mongoose is connected.')
    // });

    // mongoose.connection.on('error', (err) => {
    //     console.log(`Mongoose not connected: ${err}`)
    // });
})();

const collection_connection = mongoose.model('bookmovietickets', bookMovieSchema);
// Exported model 
exports.connection = collection_connection;
