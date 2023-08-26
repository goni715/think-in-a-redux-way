import {ADDED_TO_CART, DECREMENT, DELETED, INCREMENT} from "./actionTypes.js";


const initialState = {
    cartList: [
        /*
        {
            id:1,
            name: "New Laptop",
            category: "Laptop",
            price:400,
            quantity: 1,
            total:400
        }

         */
    ]
}




const cartReducer = (state=initialState,action)=>{

    switch (action.type) {
        case ADDED_TO_CART:
            return {
                ...state,
                cartList: [
                    ...state.cartList,
                    action.payload //new object/new data
                ],
            };

        case DELETED:
              return{
                  ...state,
                  cartList: state.cartList.filter((cv)=>cv.id !== action.payload),
              };

       case INCREMENT:
           const result = state.cartList.find((cv)=> cv.id === action.payload);
           result.quantity=result.quantity+1;
           result.total=result.price*result.quantity;
           return {
               ...state,
               cartList: [...state.cartList]
           };

       case DECREMENT:
           const result2 = state.cartList.find((cv)=> cv.id === action.payload);
           result2.quantity=result2.quantity-1;
           result2.total=result2.price*result2.quantity;
           return {
               ...state,
               cartList: [...state.cartList]
           };

        default:
            return state;
    }

}


export default cartReducer;