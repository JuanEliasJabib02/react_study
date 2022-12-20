import axios from "axios";
import { useEffect, useState } from "react";


export const useFetch = (namePokemon) => {

  const [pokemonData, setPokemonData] = useState({});


  useEffect(() => {

    const URL = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
    axios.get(URL)
      .then(res => setPokemonData(res.data))
      .catch(err => console.log(err))

  }, [namePokemon])

  return pokemonData

}
