import React, {useState, useEffect} from 'react';
import {Component} from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';

function Likes(){
    const [pokemons, setPokemons] = useState([{
        pokemonName: '',
        pokemonType: '',
        pokemonId: ''
    }])

    useEffect(() => {
        fetch("/Likes").then(res => {
            if(res.ok){
                return res.json()
            } 
        }).then(jsonRes => setPokemons(jsonRes));
    })

    return (<div className = 'container'> 
    <h1> Likes page</h1>
    {pokemons.map((pokemon) => (<div> 
        <h1> {pokemon.pokemonName}</h1>
        <p> {pokemon.pokemonType}</p>
        <p> {pokemon.pokemonId}</p>
        </div>
    ))}
    </div>
    );
};
export default Likes;