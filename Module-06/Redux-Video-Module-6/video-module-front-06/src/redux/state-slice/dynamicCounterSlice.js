import {createSlice} from "@reduxjs/toolkit";
import {increment} from "./counterSlice.js";


//initial state
const initialState = {
    count: 0
};

const dynamicCounterSlice = createSlice({
    name: "dynamicCounter",
    initialState,
    reducers: {
        increment2: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        }
    },
    //extraReducers: {
       // ["counter/increment"] : (state, action) => {
         //   state.count += 1;
        //}
    //}
    extraReducers: (builder) => {
        builder.addCase(increment, (state, action) => {
            state.count +=1;
        })
    }

})

const dynamicCounterSliceReducer = dynamicCounterSlice.reducer;
export const {increment2, decrement} = dynamicCounterSlice.actions;
export default dynamicCounterSliceReducer;