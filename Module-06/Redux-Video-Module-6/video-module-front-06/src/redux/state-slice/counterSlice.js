import {createSlice} from "@reduxjs/toolkit";


//initial state
const initialState = {
    count: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action)=>{
            state.count++;
        },
        decrement: (state, action)=>{
            state.count--;
        }
    }
})

const counterSliceReducer = counterSlice.reducer;
export const {increment, decrement} = counterSlice.actions;
export default counterSliceReducer;