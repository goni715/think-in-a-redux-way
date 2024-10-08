import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getVideos} from "./videosAPI.js";


const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({tags, search}) => {
    const videos = await getVideos(tags, search);
    return videos;
})


const videosSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchVideos.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload;
        }).addCase(fetchVideos.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.videos = [];
            state.error = action?.error?.message;
        })
    }
})




const videosSliceReducer = videosSlice.reducer;
export default videosSliceReducer;