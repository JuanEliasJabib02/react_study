
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {


  /*  */
  
  const [counter, setCounter] = useState(0);

  /* The use effect take two parameters, 
    a callback and an array.
  */
  useEffect(() => {
    console.log("hi")
  }, [counter])

  /* Is the dependency array is empty the callback is exececuted only
  in the first render */
  /* Is the dependency array have inside a state, the callback is executed
  in the first render and everytime that that state change his value */
  
  const [isRed, setIsRed] = useState(false);
 
  return (
    <div className="App">
      <h1>Use effect class</h1>
      <hr />
      <h2 className={isRed ? "red" : "blue"}>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setIsRed(!isRed)}>change color</button>
    </div>
  )
}

export default App
