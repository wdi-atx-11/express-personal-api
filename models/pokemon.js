var mongoose = require('mongoose'),
var Schema = mongoose.Schemal

var pokemonSchema = new Schem({
  name: String,
  type: String,
  quantity: Number,
  image: String
})

var Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;
