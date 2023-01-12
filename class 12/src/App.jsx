import { useState } from 'react'
import {Route, Routes ,Link} from "react-router-dom"
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Location from './components/Location'


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
          </ul>
        </nav>
      </header>
      < Routes >
        < Route path="/" element={<Home />} />
        < Route path="/about" element={<h1>About</h1>} />
        < Route path="/contact" element={<h1>Contact</h1>} />
        < Route path="/location/:id" element={< Location/>} />
      </Routes>

      <footer> Im the footer</footer>
    </div>
  )
}

export default App
