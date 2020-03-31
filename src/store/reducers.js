import {combineReducers} from "redux";
import {authReducer} from "./auth/reducers";
import {registrationReducer} from "./registration/reducer";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer
})