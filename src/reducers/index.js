import {CHANGE_AGE, CHANGE_NAME} from "../types";

const initialState = {
    name: "",
    age: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case CHANGE_AGE: {
            return  {
                ...state,
                age: action.payload
            }
        }
        default: return state;
    }
}