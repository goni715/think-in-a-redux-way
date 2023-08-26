import axios from "axios";
import {added} from "../actions.js";


const addTodo = (todoText) => {
   return async (dispatch, getState) => {
       try{
           const data = {text: todoText, completed:false}
           const res = await axios.post("http://localhost:9000/todos", data);
           
           dispatch(added(res?.data))

       }catch(e){
           console.log(e)
       }
   }
}





export default addTodo;