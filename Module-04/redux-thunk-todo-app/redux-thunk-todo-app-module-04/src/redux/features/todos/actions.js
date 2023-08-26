import {ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED} from "./actionTypes.js";


export const loaded = (todosData) => {
    return{
        type: LOADED,
        payload: todosData
    }
}


export const added = (todoText) => {
     return{
         type: ADDED,
         payload: todoText
     }
}



export const toggled = (todoId, status) => {
    return{
        type: TOGGLED,
        payload: {todoId, status}
    }
}



export const colorSelected = (todoId, color) => {
    return{
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }
    }
}


export const deleted = (todoId) => {
    return{
        type: DELETED,
        payload: todoId
    }
}



export const allCompleted = () => {
    return{
        type: ALLCOMPLETED,
    }
}


export const clearCompleted = () => {
    return{
        type: CLEARCOMPLETED,
    }
}