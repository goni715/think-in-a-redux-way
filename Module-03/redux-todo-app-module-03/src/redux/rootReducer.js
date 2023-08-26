import {combineReducers} from "redux";
import todosReducer from "./features/todos/reducer.js";
import filtersReducer from "./features/filters/reducer.js";


const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})


export default rootReducer;