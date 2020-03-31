import {CHANGE_NAME, CHANGE_SECOND_NAME} from "../types/types";

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
};

export const changeSecondName = (secondName) => {
    return {
        type: CHANGE_SECOND_NAME,
        payload: secondName
    }
};