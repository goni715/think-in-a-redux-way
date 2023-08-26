import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getTags} from "./tagsAPI.js";


const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
    const tags = await getTags();
    return tags;
})


const tagsSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchTags.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchTags.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tags = action.payload;
        }).addCase(fetchTags.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.tags = [];
            state.error = action?.error?.message;
        })
    }
})




const tagsSliceReducer = tagsSlice.reducer;
export default tagsSliceReducer;