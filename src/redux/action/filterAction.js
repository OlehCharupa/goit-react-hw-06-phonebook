import { EDIT_INPUT_FILTER, CLEAR_INPUT_FILTER } from "../constants/index"

export const editInputFilter = (text) => ({
    type: EDIT_INPUT_FILTER,
    payload: text
})

export const clearInputFilter = () => ({
    type: CLEAR_INPUT_FILTER
})