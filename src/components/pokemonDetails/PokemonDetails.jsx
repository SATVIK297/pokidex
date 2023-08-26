import { Link, useParams } from 'react-router-dom';
import './pokemonDetails.css'

import React, { useEffect, useState } from 'react'
import UsePokemonDetails from '../Hooks/UsePokemonDetails';

const PokemonDetails = () => {
     
    const [pokemon , setPokemon] = UsePokemonDetails();

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