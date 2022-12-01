import { useState } from 'react'
import Counter from '../public/components/Counter'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => setIsVisible(!isVisible)


  return (
    <div className="App">

      <button onClick={handleClick}>Show/Hide Button</button>
      {
        isVisible ?
          < Counter /> 
          :
          <h2>Is hidden</h2>
      }

      
     
    </div>
  )
}

export default App
