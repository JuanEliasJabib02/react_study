import React from 'react'
import axios from "axios"

const CarInfo = ({ car,getAllCars }) => {

  const deleteCarById = () => {
    
    console.log(car)
 
    const URL = `http://cars-crud.academlo.tech/cars/${car.id}`
    
    axios.delete(URL)
      .then(res => {
        getAllCars()
      })
      .catch(err => console.log(err))

  }

  const updateCarById = () => {
    const URL = `http://cars-crud.academlo.tech/cars/${car.id}`

    const data = {
      brand: "lambo"
    }
    axios.patch(URL,data)
      .then(res => {
        console.log(res.data)
        getAllCars()
      })
      .catch(err => console.log(err))
  }

   return (
    <article className='card'>
      <h2>{`${car.brand} ${car.color}`}</h2>
       <button onClick={deleteCarById} className='delete'>DELETE</button>
       <button onClick={updateCarById} className='update'>Update</button>
    </article>
  )
}

export default CarInfo