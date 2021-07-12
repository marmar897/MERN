const mongoose = require('mongoose');
//let Schema = mongoose.Schema;

const pokemonSchema = {
  pokemonName: String,
  pokemonId: Number,
  pokemonType: String
}
  
const Pokemon = mongoose.model("Pokemon", pokemonSchema);
  
module.exports = Pokemon;