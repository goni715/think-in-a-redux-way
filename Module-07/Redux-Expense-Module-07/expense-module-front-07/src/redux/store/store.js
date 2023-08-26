import {configureStore} from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counter/counterSlice.js";
import {createLogger} from "redux-logger";
import transactionSliceReducer from "../features/transaction/transactionSlice.js";

const logger = createLogger();

//configure store
const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        transaction: transactionSliceReducer
    },
    //middleware: (getDefaultMiddleware)=>
     //   getDefaultMiddleware().concat(logger)


})

export default store;