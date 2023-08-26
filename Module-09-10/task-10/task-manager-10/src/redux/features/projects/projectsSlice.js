import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    projectList : [],
    tags:[]
}


const projectsSlice = createSlice({
     name: "projects",
     initialState,
     reducers: {
         SetProjects : (state, action)=> {
             state.projectList=action.payload;
         }
     }
})


export const {SetProjects} = projectsSlice.actions;
const projectsSliceReducer = projectsSlice.reducer;
export default projectsSliceReducer;
