import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/action/phoneBookAction';
import { alertOpen } from "../../redux/action/alertAction"
import "./ContactForm.css"

const initialData = {
    name: "",
    number: ""
}

const ContactForm = () => {
    const [data, setData] = useState(initialData)
    const { name, number } = data
    const contacts = useSelector(state => state.contacts.items)
    const dispatch = useDispatch()



    const inputHandler = ({ target }) => {
        setData({ ...data, [target.name]: target.value })
    }

    const submitHendler = (e) => {
        e.preventDefault();
        if (!name || !number) {
            return
        }
        const singleContact = {
            name,
            number,
        }
        if (contacts.some(contact => contact.name === singleContact.name)) {
            dispatch(alertOpen())
        } else {
            dispatch(addContact(singleContact))
            setData(initialData)
        }
    }
    return (
        <form className="contactForm" onSubmit={submitHendler}>
            <label className="labelName"> Name
                <input
                    type="text"
                    name="name"
                    className="inputName"
                    value={name}
                    onChange={inputHandler}
                />
            </label>
            <label className="labelNumber"> Number
                <input
                    type="text"
                    name="number"
                    className="inputNumber"
                    value={number}
                    onChange={inputHandler}
                />
            </label>

            <button type="submit"
                className="btnForm"
            >
                Add contact
                    </button>
        </form>
    );
};
export default ContactForm;
