import { createSlice } from "@reduxjs/toolkit";


const nameSlice = createSlice({
  name: "name",
  initialState: "",
  reducers: {
    setNameGlobal: (state, action) => action.payload
  }

})

export const { sayHello, setNameGlobal } = nameSlice.actions

export default nameSlice.reducer