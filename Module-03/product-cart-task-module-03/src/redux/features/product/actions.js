import {PRODUCT_ADDED} from "./actionTypes.js";

export const productAdded = (data) => {
    return{
        type: PRODUCT_ADDED,
        payload: data
    }
}
