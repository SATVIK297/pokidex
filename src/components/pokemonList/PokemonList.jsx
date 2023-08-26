import './pokemonlist.css'

import React, { useEffect, useState } from 'react'
import axios from 'axios';  // Import axios
import Pokemon from '../pokemon/Pokemon';

const PokemonList = () => {

    const default_URL =  "https://pokeapi.co/api/v2/pokemon";

    const [pokemonList , setPokemonList] = useState([]);
    const [pokedexUrl , setPokedexUrl] = useState(default_URL);
    const [prevUrl , setPrevUrl] = useState(default_URL);
    const [nextUrl , setNextUrl] = useState(default_URL);
    


    async function downloadPokemons(){
        const response = await axios.get(pokedexUrl ? pokedexUrl : default_URL);
        const pokemonResults = response.data.results //array of pokemon

        setPrevUrl(response.data.previous);
        setNextUrl(response.data.next);

        const pokemonPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url))
        const pokemonListData = await axios.all(pokemonPromise); //array of promises

        const pokemonFinalList = pokemonListData.map((pokemonData)=>{
            const pokemon = pokemonData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        })
        setPokemonList(pokemonFinalList)
        
    }
    
    
    
    useEffect(()=>{
        downloadPokemons();
        
    },[pokedexUrl])

  return (
   <>
   <div className='pokemon-lisr-wrapper'>
        <h1>Pokemon List</h1>
        <div className='page-controls'>
            <button onClick={()=>setPokedexUrl(prevUrl)} >Prev</button>
            <button onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
        </div>
        <div className='pokemon-list'>

        {pokemonList.map((pokemon)=> <Pokemon key={pokemon.id} name ={pokemon.name} id = {pokemon.id} image = {pokemon.image}/>)}
        </div>
   </div>
   </>
  )
}

export default PokemonList