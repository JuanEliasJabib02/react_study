import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from "axios"
import PokeCard from './components/PokeCard';
import { useFetch } from './hooks/useFetch';

function App() {

  const [pokemonName, setPokemonName] = useState("ditto")
  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonName(e.target.input_text.value)
  }

  console.log(pokemonName)

  const pokemonData = useFetch(pokemonName)

  return (
    <div className="App">
      < PokeCard 
        pokemon={pokemonData}
      />

      <form onSubmit={handleSubmit}>
        <input type="text" name="input_text" id="input_text" />
        <button>SEARCH</button>

      </form>
    </div>
  )
}

export default App
