var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SmartRead');

exports.mongooseRef = mongoose;