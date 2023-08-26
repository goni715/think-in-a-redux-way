import {ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED} from "./actionTypes.js";

const initialState = {
    todoList:[

    ]
}




const todosReducer = (state=initialState,action)=>{

    switch (action.type)  {
        case LOADED:
            return {
                ...state,
                todoList: [
                    ...action.payload
                ],
            };
        case ADDED:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload //new object/new data
                ],
            };

        case TOGGLED:
            const result = state.todoList.find((cv)=> cv.id === action.payload.todoId);
            result.completed=action.payload.status;
            return {
                ...state,
                todoList: [...state.todoList]
            };

        case COLORSELECTED:
            const { todoId, color } = action.payload;
            const result2 = state.todoList.find((cv)=> cv.id === todoId);
            result2.color=color;
            return {
                ...state,
                todoList: [...state.todoList]
            };

        case DELETED:
            return{
                ...state,
                todoList: state.todoList.filter((cv)=>cv.id !== action.payload),
            };
        case ALLCOMPLETED:
            state.todoList.forEach((item)=>{
                item.completed=true
            })

            return {
                ...state,
                todoList: [...state.todoList]
            };


        case CLEARCOMPLETED:
            return {
               ...state,
               todoList: state.todoList.filter((todo) => todo.completed !==true)
            }

        default:
            return state;
    }

}


export default todosReducer;