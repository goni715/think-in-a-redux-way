import {createSlice} from "@reduxjs/toolkit";


//initial state
const initialState = {
    tags: [],
    search: ""
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagsSelected: (state, action)=>{
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state,action) =>{
            state.search = action.payload;
        }
    }
})

const filterSliceReducer = filterSlice.reducer;
export const {tagsSelected, tagRemoved, searched} = filterSlice.actions;
export default filterSliceReducer;