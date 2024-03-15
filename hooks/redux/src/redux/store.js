import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counter"

export const store = configureStore({
  reducer: {

    counter: counterReducer,

//counterReducer this will help to change the stats
// c9iunter is state
  },
})