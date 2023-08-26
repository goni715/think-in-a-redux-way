import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getRelatedVideos} from "./relatedVideosAPI.js";


const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos', async ({tags, id}) => {
    const relatedVideos = await getRelatedVideos({tags, id});
    return relatedVideos;
})


const relatedVideosSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchRelatedVideos.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.relatedVideos = action.payload;
        }).addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.relatedVideos = [];
            state.error = action?.error?.message;
        })
    }
})




const relatedVideosSliceReducer = relatedVideosSlice.reducer;
export default relatedVideosSliceReducer;