import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,

  // these are the reducers and what they are when it is called/triggered
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementByAmount(state, action) {
      state.count += action.payload
    },
  },
})

// must export the reducer AND the variables so that can be actually called
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer