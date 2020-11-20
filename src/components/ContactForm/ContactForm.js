import React, { useState } from 'react';
import "./ContactForm.css"

const initialData = {
    name: "",
    number: ""
}

const ContactForm = ({ addContact }) => {
    const [data, setData] = useState(initialData)
    const { name, number } = data
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
        addContact(singleContact)
        setData(initialData)
    }
    return (
        <form className="contactForm" onClick={submitHendler}>
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
