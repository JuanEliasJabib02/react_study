import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    /*  The reducers are the function 
    that our state can do */
    increment: state => state + 1,
    decrement: state => state - 1,
    reset: state => 0
  }
})

export const { increment, decrement, reset } = counterSlice.actions


/* We export the slice to the store index.js and put in the reduce */
export default counterSlice.reducer