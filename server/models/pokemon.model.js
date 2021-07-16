const mongoose = require('mongoose');
//let Schema = mongoose.Schema;

const pokemonSchema = new mongoose.Schema({
  pokemonName: {type: String, required: true},
  pokemonId: Number,
  pokemonType: String
});
  
const Pokemon = mongoose.model("Pokemon", pokemonSchema);
  
module.exports = Pokemon;