import {ADD, DELETE} from "./actionTypes.js";

export const addItem = (newData) => {
    return {
        type: ADD,
        payload: newData,
    };
};

export const deleteItem = (index) => {
    return {
        type: DELETE,
        payload: index
    };
};
