import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import searchfieldReducer from './searchfieldSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchfield: searchfieldReducer,
  },
})