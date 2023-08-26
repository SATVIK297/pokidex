import './pokemonlist.css'

import React, { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon';
import UsePokemonList from '../Hooks/UsePokemonList';

const PokemonList = () => {


    // const [pokemonList , setPokemonList] = useState([]);
    // const [pokedexUrl , setPokedexUrl] = useState(default_URL);
    // const [prevUrl , setPrevUrl] = useState(default_URL);
    // const [nextUrl , setNextUrl] = useState(default_URL);
    
    //code CLEANUP 

   const [pokemonListState, setPokemonListState] = UsePokemonList();

  return (
   <>
   <div className='pokemon-lisr-wrapper'>
        <h1>Pokemon List</h1>
        <div className='page-controls'>
            <button onClick={()=>setPokemonListState({...pokemonListState , pokedexUrl: pokemonListState.prevUrl})} >Prev</button>
            <button onClick={()=>setPokemonListState({...pokemonListState , pokedexUrl: pokemonListState.nextUrl})}>Next</button>
        </div>
        <div className='pokemon-list'>

        {pokemonListState.pokemonList.map((pokemon)=> <Pokemon key={pokemon.id} name ={pokemon.name} id = {pokemon.id} image = {pokemon.image} />)}
        </div>
   </div>
   </>
  )
}

export default PokemonList