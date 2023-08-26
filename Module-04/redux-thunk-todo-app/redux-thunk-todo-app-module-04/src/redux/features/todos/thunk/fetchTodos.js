import axios from "axios";
import {loaded} from "../actions.js";

const fetchTodos = async (dispatch, getState) => {
    try {
        const res = await axios.get("http://localhost:9000/todos");
        dispatch(loaded(res?.data));

    } catch (e) {
        console.log(e);
    }
}

export default fetchTodos;