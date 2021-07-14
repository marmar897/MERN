const path = require("path");
const express = require("express");
const { response } = require("express");
const app = express(); // create express app
const fetch = require('node-fetch');
const bodyParser = require("body-parser");
const likes = require("./routes/likes");
require('dotenv/config');

//import mongoose
const mongoose = require('mongoose');

app.use(express.json()); //Used to parse JSON bodies

app.use("/likes" , likes);
//used the likes.js file to handle endpints starting with likes
//  instead of this -> app.use("/", require("./routes/pokemon.routes"));


//f your React App is using routing then it will not work 
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


// start express server on port 5000
app.listen(5000, ()  => {
  console.log("server started on port 5000");
});



app.get('/pokemon_info/:value', async (request, response) => {
   console.log(request.params);
   const value = request.params.value;
   console.log(value); 

  const api_url = 'https://pokeapi.co/api/v2/pokemon/';

  const fetch_response = await fetch(api_url+value);
  const json = await fetch_response.json();
  response.json(json);
})

//establish connection to database
mongoose.connect(
  process.env.DB_Connection,
  { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
  (err) => {
      if (err) return console.log("Error: ", err);
      console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
  }
);

