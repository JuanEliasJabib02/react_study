import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import axios from "axios"
import CarInfo from './components/CarInfo'
import FormCar from './components/FormCar'

function App() {

  const [cars, setCars] = useState()

  const getAllCars = () => {
    const URL = "http://cars-crud.academlo.tech/cars/"
    axios.get(URL)
      .then(res => setCars(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllCars()
  },[])

  const createNewCar = (data) => {
    const URL = "http://cars-crud.academlo.tech/cars/"

 /*    const data = {
      brand: "shaman",
      model: "yellow",
      color: "red",
      year: 2022,
      price: "150000",
    } */

    axios.post(URL, data)
      .then(res => {
        getAllCars()
      })
      .catch
  }

  return (
    <div className="App">
      <h1>axios crud</h1>
      <button onClick={createNewCar}>CREATE CARD</button>
      <div className='cars-container'>
        {
          /* El () en AF is a implicit return */
          cars?.map(car => (
            < CarInfo key={car.id} car={car} getAllCars={getAllCars} />
          ))
        }

        <FormCar createNewCar={createNewCar} />
      </div>
    </div>
  )
}

export default App
