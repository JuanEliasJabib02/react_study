import React from 'react'
import { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  const resetCounter = () => setCounter(0);


  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default Counter