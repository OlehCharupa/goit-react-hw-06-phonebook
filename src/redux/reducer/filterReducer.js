import { EDIT_INPUT_FILTER, CLEAR_INPUT_FILTER } from "../constants/index"
const initialState = ""

export const filter = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_INPUT_FILTER:
            return action.payload;
        case CLEAR_INPUT_FILTER:
            return ""
        default:
            return state
    }
}