import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getVideo} from "./videoAPI.js";


const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchVideo = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = await getVideo(id);
    return video;
})


const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchVideo.pending, (state, action) => {
            state.isError = false;
            state.isLoading = true;
        }).addCase(fetchVideo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.video = action.payload;
        }).addCase(fetchVideo.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.video = {};
            state.error = action?.error?.message;
        })
    }
})




const videoSliceReducer = videoSlice.reducer;
export default videoSliceReducer;