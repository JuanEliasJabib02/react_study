
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  const [weather, setWeather] = useState();
  const [coords, setCoords] = useState();
  
  const success = (pos) => {
    setCoords({
      lat: pos.coords.latitude,
      lon:pos.coords.longitude
    })
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  },[])
  
  useEffect(() => {
    if (coords) {
      const lat = coords.lat;
      const lon = coords.lon;
      const apiKey = "85787b401d5f7ffcd95ccde1def50231"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      axios.get(URL)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
      return
    }

  }, [coords])

  console.log(weather);
  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  )
}

export default App
