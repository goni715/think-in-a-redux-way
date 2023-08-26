import axios from "axios";


const fetchTodosMiddleware = (store) => (next) => async (action)=>{
    if(action.type === "todos/fetchTodos"){
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");

        store.dispatch({
            type: "todos/todoLoaded",
            payload: res?.data
        })

        return;
    }

    return next(action);
}


export default fetchTodosMiddleware;
