import {AUTH_CHANGE_NAME, AUTH_CHANGE_PASSWORD} from "./action";

const initialState = {
    name: "",
    password: ""
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case AUTH_CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.payload
            }
        }
        default: return state;

    }
}