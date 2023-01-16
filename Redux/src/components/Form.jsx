import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameGlobal } from '../store/slices/name.slice'

const Form = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setNameGlobal(e.target.input.value))
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2> put your name here</h2>
      <input type="text" name="input" id="input" />
      <button>Say Hello</button>
    </form>
  )
}

export default Form