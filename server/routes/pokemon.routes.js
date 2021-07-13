
const express = require("express");
const router = express.Router();  
const Pokemon = ("../models/pokemon.model");

// create new pokemon 
router.route('/pokemon').post((req, res) => {
    try {
    console.log("this is a test");
    console.log(req.body);

    const pokemonName = req.body.pokemonName;
    console.log(pokemonName);
    // const pokemonId = req.body.pokemonId,
    // const pokemonType = req.body.pokemonType,
   
    const newPokemon = new Pokemon({
        pokemonName,
        // pokemonType,
        // pokemonId
    });
    newPokemon.save();
} catch (err) {
    res.status(400).json({
        status: 400,
        message: err.message
    });
}
});

router.route("/Likes").get((req, res) => {
    Pokemon.find()
        .then(foundPokemons => res.json(foundPokemons))

})

//
// module.exports = (app) => {
//     const pokemons = require('/pokemon.controller.js');

//     // Create a new Poke
//     app.post('/pokemons', pokemons.create);

//     // Retrieve all Pokes
//     app.get('/pokemons', pokemons.findAll);

//     // Retrieve a single pokes with pokesId
//     app.get('/pokemons/:pokemonsId', pokemons.findOne);

//     // Update a poke with pokeeId
//     app.put('/pokemons/:pokemonsId', pokemons.update);

//     // Delete a poke with pokeId
//     app.delete('/pokemons/:pokemonsId', pokemons.delete);
// }


module.exports = router;