import React from 'react'

const Card = ({ text,color }) => {
  

  const objStyle = {
    color
  }
  return (
    <div style={objStyle}>{text}</div>
  )
}

export default Card
