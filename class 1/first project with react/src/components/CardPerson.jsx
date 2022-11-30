import React from 'react'

const CardPerson = ({ title }) => {
  
  const person = {
    name: "Juan",
    age: 26,
    favMovie: "south park",
    favMusic :"All"
  }
  return (
    <ul className='person'>
    <li><b>Nombre:</b>{person.name}</li>
    <li><b>Age:</b>{person.age}</li>
    <li><b>Fav movie:</b>{person.favMovie}</li>
    <li><b>Fav Music:</b>{person.favMusic }</li>
  </ul>
  )
}

export default CardPerson