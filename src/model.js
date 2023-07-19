const mongoose = require("mongoose");
// Imported bookMovieSchema schema
const { bookMovieSchema } = require('./schema');

// Model created using exported
module.exports.bookMovieModel = mongoose.model('bookmovietickets', bookMovieSchema);