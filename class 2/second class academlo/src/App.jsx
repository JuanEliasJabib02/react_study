import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }


  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0)
  }
  console.log(count)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-1</button>
    </div>
  )
}

export default App
