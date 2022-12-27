import React from 'react'
import {useForm} from "react-hook-form"

const FormCar = ({createNewCar}) => {

  const { register, handleSubmit } = useForm()
  
  const submit = (data) => {
    createNewCar(data)
  }
  return (
    <form onSubmit={handleSubmit(submit)} >()
      <div className='form-crud'>
        <label htmlFor="brand">BRAND </label>
        <input id="brand" type="text" {...register("brand")} />
        <label htmlFor="model">model </label>
        <input id="model" type="text" {...register("model")} />
        <label htmlFor="color">COLOR </label>
        <input id="color" type="text" {...register("color")}  />
        <label htmlFor="year">year </label>
        <input id="year" type="text" {...register("year")}  />
        <label htmlFor="price">PRICE </label>
        <input id="price" type="price"{...register("price")}  />
        
        
      </div>

      <button className="submit">SUBMIT</button>
    </form>
  )
}

export default FormCar