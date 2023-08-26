import axios from "axios";

const fetchTodos = async (dispatch, getState) => {
    const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );


    dispatch({
        type: "todos/todoLoaded",
        payload: res?.data,
    });

    console.log(`Number of updated todos: ${getState().todoList.length}`);
};


export default fetchTodos;