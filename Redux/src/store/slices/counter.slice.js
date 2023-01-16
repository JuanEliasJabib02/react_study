import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {

  }
})

/* We export the slice to the store index.js and put in the reduce */
export default counterSlice.reducer