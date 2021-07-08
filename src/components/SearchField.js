import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';
//const apiKey = '7gQiahHXIrO2CcBEcaP2RQCYAVcM8pvX';


class SearchField extends Component{
    constructor(){
        super();
        this.state = {
            input: '',
            pokemon:{} ,
            found: false,
        }
    }

    componentDidMount(){
        // axios.get("/pokemon_info").then((response) => {
        //     this.setState({pokemons: response.data});
        // });
    }


     handleFormChanges = async (event) => {
        event.preventDefault();
        let value = document.getElementById('submitId').value;
        value.toLowerCase();

        const response =  await axios.get('/pokemon_info/' +value) 
        console.log(response.data);
        this.setState({pokemon: response.data, found: true})
        // .then(function(response){
           // console.log(response.data);
        }

        //let result = this.state.pokemons[value];
        
        // // this.setState(val}); 
        // fetch('http://api.giphy.com/v1/gifs/search?q=' + val + '&api_key=' + apiKey )
    
        //   .then(response => response.json())
        //   .then(data => {
        //     //console.log(data)
        //     this.setState({gifs:data.data, found: true})
        //      console.log(this.state.gifs);
        //     //console.log("SETSTATE DONE")
        //   })
    
        //   .catch(error => {
        //     this.setState({ found: false })
        //     console.log("error: ")
        //   });

       //const api_url = 'gify/' + value + '&api_key=${apiKey}';
       //const api_url = '/gify'
    //    const api_url = 'pokemon_info/' + value;
    //    //const api_key = '7gQiahHXIrO2CcBEcaP2RQCYAVcM8pvX';
    //     const response = await fetch(api_url);
    //     const json = await response.json();
    //     console.log(json);

      //}


    // renderPokemon(){
    //     //move all this i guess 
    //     //
    // }

    render(){
        let foundcard ;
        if (this.state.found) {
            foundcard = <PokemonCard pokemon ={this.state.pokemon}/>
         // foundcards = this.state.pokemons.map((i) => <PokemonCard pokemon={i}/>)
         console.log("its been found")
        } else {
          foundcard = <h2> no found results</h2>
        }

        return(
            <div className ="searchField" > 
            <input id= "submitId" placeholder="Search for Pokemons!" />
            <button onClick= {this.handleFormChanges}> Search </button>
            {foundcard}
            </div>
        );
    }
}

export default SearchField;