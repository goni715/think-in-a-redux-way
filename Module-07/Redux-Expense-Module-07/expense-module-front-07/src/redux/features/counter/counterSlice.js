import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    count: 0
}


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++;
        },
        decrement: (state, action) => {
            state.count--;
        }
    }
})


export const {increment, decrement} = counterSlice.actions;
const counterSliceReducer = counterSlice.reducer;
export default counterSliceReducer;