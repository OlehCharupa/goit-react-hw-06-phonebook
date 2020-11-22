import React from 'react';
import { useDispatch } from 'react-redux';
import "./ContactList.css"
import { deleteContact } from "../../redux/action/phoneBookAction"

const ContactList = ({ name, number, id }) => {
    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(deleteContact(id))
    }
    return (
        <li className="contactItem">
            <p className="contactName">{name}</p>
            <p className="contactNumber">{number}</p>
            <button type="button" className="del_Btn" onClick={deleteItem}></button>
        </li>
    );
};

export default ContactList;
