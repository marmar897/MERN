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
            <p> the name of this pokemon is {this.state.pokemonName} </p>
            <p> Its type is {this.state.pokemonType} </p>
            <p> its id number is {this.state.pokemonId}</p>
            {/* <img src= {props.gif.images.downsized.url}/> */}
            <button> Like! </button>
        </div>
    )
}
}

export default PokemonCard;