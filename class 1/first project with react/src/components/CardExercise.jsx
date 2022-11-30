import React from 'react'

const CardExercise = ({title,e1,e2,e3,e4, backgroundColor}) => {

  const objStyle = {
    backgroundColor
  }

  return (
    <div style={objStyle } className='cardExercise'>
      <h1>{title}</h1>
      <p>{e1}</p>
      <p>{e2}</p>
      <p>{e3}</p>
      <p>{e4}</p>
    </div>
  )
}

export default CardExercise