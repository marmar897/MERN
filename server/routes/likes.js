const express = require("express");
const { mongo } = require("mongoose");
const router = express.Router(); 
const mongoClient = require("../mongoClient");

const DB = mongoClient.getDB();


//const Pokemon = ("../models/pokemon.model");

router
    .route("/add")
    // .get((req, res) => {
    //     res.send("hi get /likes/add");
    // })
    .post((req,res)=> {
        console.log(DB);
        try {
            /* this is where i take the data from the req, and 
            make a call to the DB and return the id of the object.  
            */
        } catch (error) {
            // send an error with res. 
            
        }
        res.send("hi post /likes/add");
    });
      
router
    .route("/delete")
    .get((req, res)=> {
        res.send("hi get /likes/delete");
    })
    .post((req,res)=> {
        res.send("hi post /likes/delete");
    });

module.exports = router;