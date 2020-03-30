import { ADD, DEL} from "../types";

export const reducers = (state, action) => {
    switch (action.type) {
        case ADD:
            return {
            ...state,
                amount: state.amount + action.value
        }
        case DEL: {
            return {
                ...state,
                amount: state.amount - action.value
            }
        }
        default: return state;
    }
}