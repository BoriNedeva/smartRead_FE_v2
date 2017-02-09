var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var ratingSchema = new Schema({
  username: String,
  isbn: String,
  rating: Number,
});

var Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;