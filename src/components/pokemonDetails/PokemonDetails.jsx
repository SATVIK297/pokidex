import { Link, useParams } from 'react-router-dom';
import './pokemonDetails.css'

import React, { useEffect, useState } from 'react'
import axios from 'axios';

const PokemonDetails = () => {
     
    const {id} = useParams()
    const pokemon_URL =  "https://pokeapi.co/api/v2/pokemon/";
    const [pokemon , setPokemon] = useState(null);

    async function downloadPokemon(){
        const response = await axios.get(pokemon_URL+id);
        const pokemon = response.data;
        setPokemon({
            name : pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types,
            image : pokemon.sprites.other.dream_world.front_default

        })
    }

    useEffect(()=>{
        downloadPokemon();

    },[])

  return (
    
    <>

    <h1>
        <Link to="/">
        Pokedex
        </Link>
    </h1>

{pokemon && <div className='pokemon-details-wrapper'>
        <div>PokemonDetails</div>
        <div className='pokemon-detail-name'>
            {pokemon.name}
        </div>
        <div className='pokemon-image'>
            <img src={pokemon.image} alt="" />
        </div>
        <div className='pokemon-attr'>
            <div>
                Height : {pokemon.height}
            </div>
            <div>
                Weight : {pokemon.weight}
            </div>
        </div>
       
       
        <div className='pokemon-types'>
            Type : {pokemon.types.map(t=> <span className='type' key={t.type.name}>{t.type.name}</span>  )}
        </div>
    </div>}
    
    
    </>
  

    
    
    
     
   
       

  )
}

export default PokemonDetails