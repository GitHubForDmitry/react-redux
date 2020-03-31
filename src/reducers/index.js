import {CHANGE_NAME, CHANGE_SURNAME} from "../types";

const initialState = {
    name: '',
    secondName: ''
};

export const reducer  = (state= initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case CHANGE_SURNAME: {
            return {
                ...state,
                secondName: action.payload
            }
        }
        default: return state;
    }
}
