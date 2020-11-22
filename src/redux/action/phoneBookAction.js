import { ADD_CONTACT, DELETE_CONTACT } from "../constants/index";

export const addContact = (objContact) => ({
    type: ADD_CONTACT,
    payload: objContact
})

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})