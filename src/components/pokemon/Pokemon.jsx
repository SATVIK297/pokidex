import React from 'react'

import './pokemon.css'
import { Link } from 'react-router-dom'

const Pokemon = ({id , image , name}) => {
  return (

    <Link to={`/pokemon/${id}`} className='pokemon-wrapper'>

    <div className='pokemon'>
        <div className='pokemon-name'>{name}</div>
        <img className='pokemon-image' src={image} alt="" />
    </div>

    </Link>

  )
}

export default Pokemon