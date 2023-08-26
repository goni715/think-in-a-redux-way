import Todo from "./Todo.jsx";
import {useSelector} from "react-redux";

const TodoList = () =>{
    const todos = useSelector((state)=>state.todos.todoList);
    const filters = useSelector((state)=> state.filters);


    const filterByStatus = (todo) => {
        const { status } = filters;
        switch (status) {
            case "Complete":
                return todo.completed;

            case "Incomplete":
                return !todo.completed;

            default:
                return true;
        }
    };

    const filterByColors = (todo) => {
        const { colors } = filters;
        if (colors.length > 0) {
            return colors.includes(todo?.color);
        }
        return true;
    };


    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(filterByStatus)
                .filter(filterByColors)
                .map((todo,i) => (
                <Todo item={todo} key={i.toString()} />
            ))}
        </div>
    );
}


export default TodoList;