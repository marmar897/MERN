const express = require("express");
const { mongo } = require("mongoose");
const router = express.Router(); 
const mongoClient = require("../mongoClient");

const DB = mongoClient.getDB();
const Pokemon = ("../models/pokemon.model");

const likeController = require('../controllers/likes');
const multer = require('multer');
const upload = multer();

router
    .route("/add")
    // .get((req, res) => {
    //     res.send("hi get /likes/add");
    // })
    .post((req,res)=> {
        console.log("post request now");
        try {
            /* this is where i take the data from the req, and 
            make a call to the DB and return the id of the object.  
            */
           console.log("inside try block!");
           console.log(req.body);
           //const newPokemon  = req.body;
           //console.log(newPokemon);

            const pokemonName = req.body.pokemonName;
            console.log(req.body.pokemonName);
            // const pokemonId = req.body.pokemonId;
            // const pokemonType = req.body.pokemonType;

            // console.log(pokemonId, pokemonName, pokemonType);

             const newPokemon = new Pokemon ({
                pokemonName,
            //     pokemonId,
            //     pokemonType
             });

            



            newPokemon.save((err, data) => {
                console.log("saved pokemon");
                if(err){
                    console.log("there was an  error ====")
                    return res.json({error: err});
                }
                console.log("theres no error and the newpokemon should be sent to the DB");
                return res.json({});
            });
           // console.log(newPokemon);

        } catch (error) {
            // send an error with res. 
            // res.status(400).json({
            //     status: 400,
            //     message: error.message
            // });
           // console.log(res);
            console.log("this is in the catch block so something happend");
        }
        res.send("hi post /likes/add");
    });

  //  .post('/add', upload.none(), likeController.newLike);

// router.route.get('/add', likeController.getAllLikes);

// router.route.delete('/edit/:id', likeController.deleteOneLike);

      
// router
//     .route("/delete")
//     .get((req, res)=> {
//         res.send("hi get /likes/delete");
//     })
//     .post((req,res)=> {
//         res.send("hi post /likes/delete");
//     });

module.exports = router;