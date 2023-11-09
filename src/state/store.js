import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import searchfieldReducer from './searchfieldSlice';
import robotsReducer from './robotsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchfield: searchfieldReducer,
    robots: robotsReducer,
  },
})