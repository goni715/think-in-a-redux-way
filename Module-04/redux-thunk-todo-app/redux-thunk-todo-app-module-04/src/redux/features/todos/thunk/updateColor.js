import axios from "axios";
import {colorSelected, toggled} from "../actions.js";


const updateColor = (todoId, color) => {
    return async (dispatch, getState) => {
        try{
            const data = {color: color}
            const res = await axios.patch(`http://localhost:9000/todos/${todoId}`, data);
            dispatch(colorSelected(todoId,color))

        }catch(e){
            console.log(e)
        }
    }
}





export default updateColor;