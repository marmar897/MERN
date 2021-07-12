const Pokemon = require('/pokemon.model.js');

// Create and Save a new Pokemon
// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Content can not be empty"
        });
    }

    // Create a Pokemon
    const pokemon = new Pokemon({
        pokemonName: req.body.pokemonName
       // content: req.body.content
    });

    // Save Note in the database
    pokemon.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all pokemon from the database.
exports.findAll = (req, res) => {

};

// Find a single note with a pokemonId
exports.findOne = (req, res) => {

};

// Update a note identified by the pokemonId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified pokemonId in the request
exports.delete = (req, res) => {

};