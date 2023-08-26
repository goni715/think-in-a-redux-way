import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import fetchTodos from "./redux/middlewares/functions.js";


const App = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state)=> state.todoList);
    console.log(todos);
    const [text, setText] = useState("")



    useEffect(()=>{
        dispatch(fetchTodos);
    },[dispatch])


    /*
     useEffect(()=>{
        dispatch({
            type: "todos/fetchTodos"
        })
    },[dispatch])
     */

    const handleClick = () => {
        dispatch({
            type: "todos/todoAdded",
            payload: text
        })
    }


    return (
        <>
            <h1>New Project</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            <button onClick={handleClick}>Click Here</button>
        </>
    );
};

export default App;