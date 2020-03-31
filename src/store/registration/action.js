export const REGISTRATION_CHANGE_NAME = "REGISTRATION_CHANGE_NAME";
export const REGISTRATION_CHANGE_PASSWORD = "REGISTRATION_CHANGE_PASSWORD";
export const REGISTRATION_CHANGE_REPEAT_PASSWORD = "REGISTRATION_CHANGE_REPEAT_PASSWORD";

export const changeName = name => {
    return {
        type: REGISTRATION_CHANGE_NAME,
        payload: name
    }
}

export const changePassword = name => {
    return {
        type: REGISTRATION_CHANGE_PASSWORD,
        payload: name
    }
}

export const changeRepeatPassword = name => {
    return {
        type: REGISTRATION_CHANGE_REPEAT_PASSWORD,
        payload: name
    }
}