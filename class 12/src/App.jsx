import { useState } from 'react'
import {Route, Routes ,Link, } from "react-router-dom"
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Location from './components/Location'
import MainLayout from './components/MainLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>Im the header
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/location/1">Locaton</Link></li>
          </ul>
        </nav>
      </header>
      < Routes >
        < Route path="/" element={<Home />} />
        < Route path="/about" element={<h1>About</h1>} />
    

        {/* Anidate route are usefull is we want a element
        to share in all routes*/}
        < Route element={<MainLayout />}>
          < Route path="/location/:id" element={< Location />} />
          < Route path="/contact" element={<h1>Contact</h1>} />
        </Route>
      </Routes>


      

      <footer> Im the footer</footer>
    </div>
  )
}

export default App
