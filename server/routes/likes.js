const express = require("express");
const router = express.Router(); 

//const Pokemon = ("../models/pokemon.model");

router
    .route("/add")
    .get((req, res) => {
        res.send("hi get /likes/add");
    })
    .post((req,res)=> {
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