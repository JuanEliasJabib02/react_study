import React from 'react'

const CarInfo = ({ car }) => {


  return (
    <article>
      <h2>{`${car.brand} ${car.color}` }</h2>
    </article>
  )
}

export default CarInfo