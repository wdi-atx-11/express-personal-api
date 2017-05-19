var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VacationSchema = new Schema({
  country: String,
  date: String,
  duration: String,
  photo: String
})

var Vacation = mongoose.model('Vacation', VacationSchema);

module.exports = Vacation;
