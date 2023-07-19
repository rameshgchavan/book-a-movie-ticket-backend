// Imported mongoose schema
const mongoose = require('mongoose');
// Created bookMovieSchema schema
const bookMovieSchema = new mongoose.Schema({
    movie: String,
    slot: String,
    seats: {
        A1: Number,
        A2: Number,
        A3: Number,
        A4: Number,
        D1: Number,
        D2: Number
    }

})
// Exported schema

// Model created using book movie schema and exported
module.exports.bookMovieModel = mongoose.model('bookmovietickets', bookMovieSchema);
