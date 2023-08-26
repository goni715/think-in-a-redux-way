import axios from "axios";
import {deleted} from "../actions.js";


const deleteTodo = (todoId) => {
    return async (dispatch, getState) => {
        try{
            await axios.delete(`http://localhost:9000/todos/${todoId}`);
            dispatch(deleted(todoId))
        }catch(e){
            console.log(e)
        }
    }
}





export default deleteTodo;