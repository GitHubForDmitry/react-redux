export const AUTH_CHANGE_NAME = "AUTH_CHANGE_NAME";
export const AUTH_CHANGE_PASSWORD = "AUTH_CHANGE_PASSWORD";

export const changeName = (name) => {
    return {
        type: AUTH_CHANGE_NAME,
        payload: name
    }
}


export const changePassword = (password) => {
    return {
        type: AUTH_CHANGE_PASSWORD,
        payload: password
    }
}