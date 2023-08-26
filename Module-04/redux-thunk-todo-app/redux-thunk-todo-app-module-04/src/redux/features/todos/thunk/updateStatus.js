import axios from "axios";
import {toggled} from "../actions.js";


const updateStatus = (todoId, currentStatus) => {
    return async (dispatch, getState) => {
        try{
            const data = {completed: !currentStatus}
            const res = await axios.patch(`http://localhost:9000/todos/${todoId}`, data);
            dispatch(toggled(todoId, !currentStatus))

        }catch(e){
            console.log(e)
        }
    }
}





export default updateStatus