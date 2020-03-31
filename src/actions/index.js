import {CHANGE_NAME, CHANGE_SURNAME} from "../types";

export const changeName = name => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
};

export const changeSurname = surname => {
    return {
        type: CHANGE_SURNAME,
        payload: surname
    }
};