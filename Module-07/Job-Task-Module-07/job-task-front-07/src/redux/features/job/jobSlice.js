import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {addJob, deleteJob, editJob, getJob, getJobs} from "./jobAPI.js";

const initialState = {
    jobs: [],
    allJobs: [],
    job:{},
    isLoading: false,
    isError: false,
    error: ''
}


export const fetchJobs = createAsyncThunk("job/fetchJobs", async () => {
    return await getJobs();
})

//fetch single job
export const fetchJob = createAsyncThunk("job/fetchJob", async (id) => {
    return await getJob(id);
})

export const createJob = createAsyncThunk('job/createJob', async (data) => {
    return await addJob(data);
})

export const updateJob = createAsyncThunk('job/updateJob', async ({id, data}) => {
   return  await editJob(id,data);
})

export const removeJob = createAsyncThunk('job/removeJob', async (id) => {
    return await deleteJob(id);
})



const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
       SetType: (state, action) =>{
           if(action.payload === "all"){
               state.jobs = state.allJobs;
           }else{
               state.jobs = state.allJobs.filter((cv) => cv.type === action.payload);
           }
       },
       SortingJob : (state, action) =>{
           if(action.payload === "Default"){
               state.jobs = state.allJobs.sort((a,b)=>{
                   return a.id - b.id;
               });
           }
           else if(action.payload === "ascending"){
               state.jobs = state.allJobs.sort((a,b)=>{
                   return a.salary - b.salary;
               });
           }else{
               state.jobs = state.allJobs.sort((a,b)=>{
                   return b.salary - a.salary;
               });
           }
       }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.allJobs = action.payload;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action)=> {
                state.isError = true;
                state.isLoading = false;
                state.allJobs = [];
                state.jobs = [];
                state.error = action.error?.message;
            })
            //fetch single job part
            .addCase(fetchJob.pending, (state)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.job = action.payload;
            })
            .addCase(fetchJob.rejected, (state, action)=> {
                state.isError = true;
                state.isLoading = false;
                state.job = {};
                state.error = action.error?.message;
            })
            //create job part
            .addCase(createJob.pending, (state)=>{
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs.push(action.payload);//new
                state.allJobs.push(action.payload);//new job
            })
            .addCase(createJob.rejected, (state, action)=> {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
            //Update Job Part
            .addCase(updateJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(updateJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;

                const indexToUpdate = state.jobs.findIndex(
                    (j) => j.id === action.payload.id
                );

                state.jobs[indexToUpdate] = action.payload;
            })
            .addCase(updateJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action?.error?.message;
            })
            //Remove Job Part
            .addCase(removeJob.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                console.log(action);
                state.isError = false;
                state.isLoading = false;

                state.allJobs = state.allJobs.filter(
                    (j) => j.id !== action.meta.arg
                );

                state.jobs = state.jobs.filter(
                    (j) => j.id !== action.meta.arg
                );
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action?.error?.message;
            })

    }
})


export const {SetType, SortingJob} = jobSlice.actions;

const jobSliceReducer = jobSlice.reducer;
export default jobSliceReducer;