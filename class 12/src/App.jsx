import { useState } from 'react'
import {Route, Routes ,Link, } from "react-router-dom"
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Location from './components/Location'
import MainLayout from './components/MainLayout'
import Login from './components/Login'
import ProtectedRoute from "./components/ProtectedRoute"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>Im the header
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            <h2>Anidate Routes</h2>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/location/1">Location</Link></li>
            <h2>Protected Routes</h2>
            <li><Link to="login">Login</Link></li>
            <li><Link to="product">Product</Link></li>
            <li><Link to="login">Orders</Link></li>
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

        {/* Protected Routes */}
        < Route path="/login" element={< Login />}></Route>
        
        < Route element={ProtectedRoute}>

          < Route path="/product" element={<h2>Product</h2> } />
          < Route path="/orders" element={<h2>Orders</h2> } />
        </Route>
      </Routes>


      

      <footer> Im the footer</footer>
    </div>
  )
}

export default App
