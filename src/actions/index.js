import { ADD, DEL } from "../types";

export const add = (value, store) => store.dispatch({type: ADD, value});
export const del = (value, store) => store.dispatch({type: DEL, value});