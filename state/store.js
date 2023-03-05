import { configureStore } from '@reduxjs/toolkit'
import demoReducer from './stateDemoSlice'


export const store = configureStore({
  reducer: {
    statedemo:demoReducer
  },
})