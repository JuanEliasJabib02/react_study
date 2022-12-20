import React from 'react'

const PokeCard = ({ pokemon }) => {
  
  console.log(pokemon)
  
  return (
    <div>
      <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      <h2>{pokemon?.name }</h2>
      
  </div>
  )
}

export default PokeCard