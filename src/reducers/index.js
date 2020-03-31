import {CHANGE_FIRST_NAME, CHANGE_SECOND_NAME} from "../types";

const initialState = {
    name: "",
    surname: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIRST_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case CHANGE_SECOND_NAME: {
            return {
                ...state,
                surname: action.payload
            }
        }
        default: return state;
    }
};