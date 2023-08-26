import {PRODUCT_ADDED} from "./actionTypes.js";


const initialState = {
    productList: [
        {
            id:1,
            name: "Pant & Hodie",
            category: "Cloth",
            imgUrl: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
            price:400,
            quantity: 30
        },
        {
            id:2,
            name: "Realme Y33 Smart Phone",
            category: "Mobile",
            imgUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
            price:200,
            quantity: 30
        },
        {
            id:3,
            name: "New Laptop",
            category: "Laptop",
            imgUrl: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczczLXRlZC0xMDIyMi5wbmc.png?s=eHiWXY9rDBJrjWGsCN6pJXrj7i3JjX6BTbJfi-vEngY",
            price:300,
            quantity: 30
        },
        {
            id:4,
            name: "New Laptop",
            category: "Laptop",
            imgUrl: "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
            price:500,
            quantity: 30
        }
    ]
}




const productsReducer = (state=initialState,action)=>{

    switch (action.type) {
        case PRODUCT_ADDED:
            return {
                ...state,
                productList: [
                    ...state.productList,
                    action.payload //new object/new data
                ],
            };
/*
        case TOGGLED:
            const result = state.todoList.find((cv)=> cv.id === action.payload);
            result.completed=!result.completed;
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
       */

        default:
            return state;
    }

}


export default productsReducer;