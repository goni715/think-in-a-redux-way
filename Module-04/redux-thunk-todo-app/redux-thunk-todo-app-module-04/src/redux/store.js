import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer.js";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk"; //thunk-middleware
//import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;