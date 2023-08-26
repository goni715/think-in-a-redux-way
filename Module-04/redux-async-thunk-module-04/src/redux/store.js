import {applyMiddleware, createStore} from "redux";
import todoReducer from "./features/todos/todoReducer.js";
import delayActionMiddleware from "./middlewares/delayActionMiddleware.js";
import fetchTodosMiddleware from "./middlewares/fetchTodosMiddleware.js";
import fetchAsyncMiddleware from "./middlewares/fetchAsyncMiddleware.js";
import thunk from "redux-thunk";



const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;