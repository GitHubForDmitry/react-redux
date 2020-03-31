import {REGISTRATION_CHANGE_NAME, REGISTRATION_CHANGE_PASSWORD,REGISTRATION_CHANGE_REPEAT_PASSWORD} from "./action";


const initialState = {
    name: "",
    password: "",
    repeatPassword: ""
}
export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_CHANGE_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
        case REGISTRATION_CHANGE_PASSWORD: {
            return {
                ...state,
                password: action.payload
            }
        }
        case REGISTRATION_CHANGE_REPEAT_PASSWORD: {
            return {
                ...state,
                repeatPassword: action.payload
            }
        }
        default: return state;

    }
}