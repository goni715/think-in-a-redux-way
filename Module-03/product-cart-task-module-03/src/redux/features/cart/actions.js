import {ADDED_TO_CART, DECREMENT, DELETED, INCREMENT} from "./actionTypes.js";

export const addedToCart = (data) => {
    return{
        type: ADDED_TO_CART,
        payload: data
    }
}


export const deleteCart = (cartId) => {
    return{
        type: DELETED,
        payload: cartId
    }
}



export const increment = (cartId) => {
    return{
        type: INCREMENT,
        payload: cartId
    }
}



export const decrement = (cartId) => {
    return{
        type: DECREMENT,
        payload: cartId
    }
}