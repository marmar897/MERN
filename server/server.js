const path = require("path");
const express = require("express");
const { response } = require("express");
const app = express(); // create express app
const fetch = require('node-fetch');
const bodyParser = require("body-parser");
const pokemonRoutes = express.Router(); 
require('dotenv/config');

//import mongoose
const mongoose = require('mongoose');

let Pokemon = require('./models/pokemon.model');

app.use(express.json()); //Used to parse JSON bodies

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.get("/", (req, res) => {
//   res.send("This is from express.js");
// });


// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// }); 

//f your React App is using routing then it will not work 
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

// Require Pokemons routes
// require('./routes/pokemon.routes')(app);

  app.use("/", require("./routes/pokemon.routes"));








// start express server on port 5000
app.listen(5000, ()  => {
  console.log("server started on port 5000");
});

app.get('/Likes', (req,res) => {
  res.send('We are on Likes');
})


app.get('/pokemon_info/:value', async (request, response) => {
   console.log(request.params);
   const value = request.params.value;
   console.log(value); 
  //const api_url = 'http://api.giphy.com/v1/gifs/search?q=' + val + '&api_key=' + apiKey ;
  //const api_url = 'http://api.giphy.com/v1/gifs/search?q=' +value +'&api_key=$7gQiahHXIrO2CcBEcaP2RQCYAVcM8pvX';
  //const api_url = 'http://api.giphy.com/v1/gifs/search?q=haikyu&api_key=7gQiahHXIrO2CcBEcaP2RQCYAVcM8pvX';

  const api_url = 'https://pokeapi.co/api/v2/pokemon/';

  const fetch_response = await fetch(api_url+value);
  const json = await fetch_response.json();
  response.json(json);
})


//establish connection to database
mongoose.connect(
  process.env.DB_Connection,
  // 'mongodb+srv://mariana-admin:Hotcheeto12@cluster0.lugql.mongodb.net/db_pokemon?retryWrites=true&w=majority',
  { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},
  (err) => {
      if (err) return console.log("Error: ", err);
      console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
  }
);

