import React from 'react'

import './pokemon.css'

const Pokemon = ({id , image , name}) => {
  return (
    <div className='pokemon'>
        <div className='pokemon-name'>{name}</div>
        

        <img className='pokemon-image' src={image} alt="" />
        

    </div>
  )
}

export default Pokemon