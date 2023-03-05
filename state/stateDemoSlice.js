import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name:""
}

export const stateDemo = createSlice({
  name: 'statedemo',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    updateName: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { increment, decrement, updateName } = stateDemo.actions

export default stateDemo.reducer