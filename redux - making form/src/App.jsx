import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import FormUser from './components/FormUser'


function App() {
  

  const { user } = useSelector(state => state)
  
  console.log(user)

  return (
    <div className="App">
      <h1>Practica Redux</h1>
      <FormUser/>
      {
        user && <h2>{`Hola soy ${user.name}, ${user.email}, ${user.email}`}</h2>
      }
    </div>
  )
}

export default App
