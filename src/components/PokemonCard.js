import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const bodyParser = require("body-parser");

class PokemonCard extends Component{
    constructor(props) {
        super(props)
        this.setState = {
            pokemonName: '',
            pokemonType: '',
            pokemonId: ''
        }
    }
    handleClick= async (event) =>  {
        event.preventDefault();
        const newPokemon = { 
          //  this.setState = {
                pokemonName : this.props.pokemon.name,
                pokemonId : this.props.pokemon.id,
                pokemonType : this.props.pokemon.types[0].type.name
           // }
        }
        console.log("creating a new pokemon", newPokemon);
       await axios.post('http://localhost:5000/pokemon',{newPokemon})
       .then(function(res){
           console.log(res);
       })
       .catch(function (error){
           console.error(error.response.data);
       });
       console.log("after the axios.post ");
    }



    render(){
    return(
        <div className= "pokemonCard">
            <p> the name of this pokemon is {this.props.pokemon.name} </p>
            <p> Its type is {this.props.pokemon.types[0].type.name} </p>
            <p> its id number is {this.props.pokemon.id}</p>
            {/* <img src= {props.gif.images.downsized.url}/> */}
            <button onClick= {this.handleClick}> Like! </button>
        </div>
    )
}
}

export default PokemonCard;