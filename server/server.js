const path = require("path");
const express = require("express");
const { response } = require("express");
const app = express(); // create express app
const fetch = require('node-fetch');


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

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});


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
