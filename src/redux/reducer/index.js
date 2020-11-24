import { combineReducers } from "redux";
import { contacts } from "../reducer/phoneBookReducer"
import { filter } from "../reducer/filterReducer"
import { isAlert } from "../reducer/alertReducer"
const contactsReduser = combineReducers({
    items: contacts,
    filter,
    isAlert
})
const rootReduser = combineReducers({ contacts: contactsReduser })


export default rootReduser