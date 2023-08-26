

const initialState = {
    todoList: [1, 2,3 ]
}



//reducer
const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case "todos/todoAdded":
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        title: action.payload,
                    },
                ],
            };

        case "todos/todoLoaded":
            return {
                ...state,
                todoList: [...state.todoList, ...action.payload],
            };

        default:
            return state;
    }
}


export default todoReducer;