import {ADD, DELETE} from "./actionTypes.js";

const initialState = {
    data:[],
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                data: [...state.data, action.payload],
            };

        case DELETE:
           // const result = state.data.splice(action.payload, 1)
            return{
                ...state,
                data: state.data.filter((cv)=>cv.id !== action.payload),
            };

        default:
            return state;
    }
};

export default bookingReducer;
