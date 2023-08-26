import {combineReducers} from "redux";
import productsReducer from "./features/product/productsReducer.js";
import cartReducer from "./features/cart/cartReducer.js";


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})


export default rootReducer;