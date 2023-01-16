// This is the place where is place the store
import { configureStore } from "@reduxjs/toolkit"
import counter from "./slices/counter.slice"
import name from "./slices/name.slice"

export default configureStore({
  reducer: {/* The reducer is where all global states are saves */
    counter, name
  }
}) 