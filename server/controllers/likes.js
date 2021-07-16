const Pokemon = require('../models/pokemon.model');
const Like = require('../models/pokemon.model')


const newLike = (req, res, next) => {
    Like.findOne({pokemonName: req.body.pokemonName}, (data)=> {
        //check if 
        if(data===null){
            //create a new like object, using the model and 
            const newLike = new Pokemon({
                pokemonName: req.body.pokemonName,
                pokemonId:  req.body.pokemonId,
                pokemonType: req.body.pokemonType
            })
            //save this object to the DB
            newLike.save((err, data) => {
                if(err){
                    return next(err);
                }
                res.send(data);
                res.send("New Pokemon created");
            });
        }else {
            return res.json({message: "Already Exists"});
        }
    })

    //res.json({message: "POST new Like"});
};

const getAllLikes = (req, res, next) => {
    res.json({message: "GET all like" });
};

const deleteOneTea = (req, res, next) => {
    res.json({message: "DELETE 1 like"})
};

module.exports = {
    newLike,
    getAllLikes,
    deleteOneTea
};
