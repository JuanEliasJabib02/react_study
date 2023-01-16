
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './store/slices/counter.slice'
import Form from './components/Form'

function App() {

  /* Using the use selector we can access to the states
  in the store  */
  const counter = useSelector(state => state.counter)
  const name = useSelector(state => state.name)

  const dispatch = useDispatch()
  
  const handlePlus = () => {
      dispatch(increment())
  }

  const handleMinus = () => {
    dispatch(decrement())
  } 

  const handleReset = () => {
    dispatch(reset())
  }

  
  return (
    <div className="App">

      {/* Redux help to us to handling global state */}
      <h1>Redux X </h1>
      <h2>{counter}</h2>
      <button onClick={handlePlus}>+1</button>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handleReset}>Reset</button>

      < Form />

      <h2>{`Hi Welcome ${name}`}</h2>
    </div>
  )
}

export default App
