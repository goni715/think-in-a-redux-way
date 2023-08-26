import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "../features/api/apiSlice.js";
import projectsSliceReducer from "../features/projects/projectsSlice.js";
import taskSliceReducer from "../features/task/taskSlice.js";


//configure store
const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        projects:projectsSliceReducer,
        task: taskSliceReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware)


})

export default store;