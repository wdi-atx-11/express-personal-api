var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  photo: String
})

var VacationSchema = new Schema({
  place: String,
  date: String,
  duration: String,
  photos: [PhotoSchema]
})

var Vacation = mongoose.model('Vacation', VacationSchema);

module.exports = Vacation;
