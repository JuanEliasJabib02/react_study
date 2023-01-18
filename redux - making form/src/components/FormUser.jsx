import React from 'react'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux'
import { setUserGlobal } from "../store/slices/user.slice"
const FormUser = () => {

  const { handleSubmit, reset, register } = useForm()

  const dispatch = useDispatch()

  

  const submit = (data) => {
    dispatch(setUserGlobal(data))
    reset()
  }
  
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="text" id="age" {...register("age")} />
      </div>
      <div>
        <label htmlFor="member">Member</label>
        <input type="checkbox" id="member" {...register("menber")} />
      </div>    
    <button>Submit</button>
    </form>
  )
}

export default FormUser