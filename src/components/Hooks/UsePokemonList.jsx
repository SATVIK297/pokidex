import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UsePokemonList = () => {

    const default_URL =  "https://pokeapi.co/api/v2/pokemon";

    const [pokemonListState  ,setPokemonListState] = useState({
        pokemonList : [],
        pokedexUrl : default_URL,
        nextUrl : default_URL,
        prevUrl : default_URL
    })


    async function downloadPokemons(){
        const response = await axios.get(pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : default_URL);
        const pokemonResults = response.data.results //array of pokemon

        // setPrevUrl(response.data.previous);
        // setNextUrl(response.data.next);

        // setPokemonListState({...pokemonListState , nextUrl : response.data.next , prevUrl : response.data.previous})

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
        // setPokemonList(pokemonFinalList)

        setPokemonListState({...pokemonListState , pokemonList: pokemonFinalList, nextUrl : response.data.next , prevUrl : response.data.previous})
        
    }
    
    
    
    useEffect(()=>{
        downloadPokemons();
        
    },[pokemonListState.pokedexUrl])


  return  [pokemonListState , setPokemonListState]
}

export default UsePokemonList