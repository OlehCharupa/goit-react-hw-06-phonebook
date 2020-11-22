import { combineReducers } from "redux";
import { contacts } from "../reducer/phoneBookReducer"
import { filter } from "../reducer/filterReducer"
const contactsReduser = combineReducers({
    items: contacts,
    filter
})
const rootReduser = combineReducers({ contacts: contactsReduser })


export default rootReduser