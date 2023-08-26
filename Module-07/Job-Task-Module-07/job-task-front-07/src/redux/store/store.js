import {configureStore} from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counter/counterSlice.js";
import {createLogger} from "redux-logger";
import jobSliceReducer from "../features/job/jobSlice.js";

const logger = createLogger();

//configure store
const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        job: jobSliceReducer
    },
    //middleware: (getDefaultMiddleware)=>
       // getDefaultMiddleware().concat(logger)


})

export default store;