import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UsePokemonDetails = () => {

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

  return [pokemon , setPokemon]
}

export default UsePokemonDetails