import {applyMiddleware, createStore} from "redux";
import bookingReducer from "./booking/bookingReducer.js";
import {composeWithDevTools} from "@redux-devtools/extension";
import logger from "redux-logger";

const store = createStore(bookingReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;