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
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">
      <header>Im the header
        <nav>
          <ul>
{/*           <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            <h2>Anidate Routes</h2>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/location/1">Location</Link></li> */}
            <h2>Protected Routes</h2>
            <li><Link to="/">Login</Link></li>
            <li><Link to="product">Product</Link></li>
            <li><Link to="/orders">Orders</Link></li>
          </ul>
        </nav>
      </header>
      < Routes >
        < Route path="/home" element={<Home />} />
        < Route path="/about" element={<h1>About</h1>} />
    

        {/* Anidate route are usefull is we want a element
        to share in all routes*/}
        < Route element={<MainLayout />}>
          < Route path="/location/:id" element={< Location />} />
          < Route path="/contact" element={<h1>Contact</h1>} />
        </Route>

        < Route path="/" element={
          < Login
          setIsLogged={setIsLogged}
          />
        } />

        < Route path="/blocked" element={<h1>Blocked</h1>} />       {/* Protected Routes */}
        < Route element={<ProtectedRoute isLogged={isLogged } />} >
          < Route path="/product" element={<h1>Product</h1> } />
          < Route path="/orders" element={<h1>Orders</h1> } />
        </Route>
      </Routes>


      

      <footer> Im the footer</footer>
    </div>
  )
}

export default App
