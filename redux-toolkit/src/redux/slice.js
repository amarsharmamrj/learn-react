import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment(state, action) {
            state += action.payload
            return state
        },
        decrement(state, action) {
            state -= action.payload
            return state
        }
    }
})

const { increment, decrement } = slice.actions
export { slice, increment, decrement }