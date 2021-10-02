import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './ducks/filter';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
})