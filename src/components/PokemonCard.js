import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class GifCard extends Component{
//     constructor(props) {
//         super(props);
//     }

//     render(){
//         return(
//             <div>
//                 <img src= {this.props.gif}/>
//             </div>
//         );
//     }
// }

// }
class PokemonCard extends Component{
    constructor(props) {
        super(props)
        this.setState = {
            pokemonName: '',
            pokemonType: '',
            pokemonId: ''
        }
    }


    render(){
    return(
        <div className= "pokemonCard">
            <p> the name of this pokemon is {this.props.pokemon.name} </p>
            <p> Its type is {this.props.pokemon.types[0].type.name} </p>
            <p> its id number is {this.props.pokemon.id}</p>
            {/* <img src= {props.gif.images.downsized.url}/> */}
            <button> Like! </button>
        </div>
    )
}
}

export default PokemonCard;