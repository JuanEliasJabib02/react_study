import React, { useEffect, useState } from 'react'

import { useParams } from "react-router-dom"
import axios from "axios"

const Location = () => {

  const [location, setLocation] = useState()

  const { id } = useParams()

  console.log(id)
  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  },[id])

  console.log(location)
  return (
  
    <h1>{location?.name} {location?.id}</h1>
  )
}

export default Location