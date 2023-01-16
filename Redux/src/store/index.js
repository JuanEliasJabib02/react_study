// This is the place where is place the store
import { configureStore } from "@reduxjs/toolkit"
import counter from "./slices/counter.slice"

export default configureStore({
  reducer: {/* The reducer is where all global states are saves */
    counter
  }
}) 