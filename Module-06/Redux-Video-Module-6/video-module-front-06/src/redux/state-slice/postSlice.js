import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//initial State
const initialState = {
    loading:false,
    posts:[],
    error: ""
};


//create async thunk
export const fetchPosts = createAsyncThunk("post/fetchPosts", async()=> {
    const response =  await axios.get("http://localhost:5000/api/v1/GetAllProducts/0");
    return response;
})


const postSlice = createSlice({
    name:"post",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action)=>{
            state.loading= true;
            state.error = "";

        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "";
            state.posts = action.payload;
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action?.error?.message;
            state.posts = [];
        })
    }
})


const postSliceReducer = postSlice.reducer;
export default postSliceReducer;
