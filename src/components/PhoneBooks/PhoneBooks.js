import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./PhoneBooks.css"


const PhoneBooks = () => {
    const [contacts, setContacts] = useState([])
    const [filter, setFilter] = useState("")
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const perContacts = localStorage.getItem("contacts")
        if (perContacts) {
            setContacts(JSON.parse(perContacts))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts))
    }, [contacts])


    const addContact = (objContact) => {
        const exist = contacts.some(contact => contact.name === objContact.name)
        exist
            ? setAlert(exist)
            : setContacts([...contacts, { ...objContact, id: uuidv4() }])
    }
    const deleteContact = id => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }


    const filterName = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

    }
    const stateFilter = ({ target }) => {
        setFilter(target.value)
    }
    const closeAlert = () => {
        setAlert(false)
    }


    return (
        <>

            <TransitionGroup className="alertBox" component="div">
                {alert
                    ?
                    <CSSTransition classNames="alert__Box" mountOnEnter unmountOnExit timeout={800} >
                        <div className="alert__Box">
                            <h2>{`Контакт с таким именем  уже существует!`}</h2>
                            <button onClick={closeAlert} className="alertButton">ok</button>
                        </div>
                    </CSSTransition>
                    : null}
            </TransitionGroup>

            <CSSTransition classNames="title" timeout={1000} in={true} appear={true}>
                <h1 className="title">Phonebook</h1>
            </CSSTransition>

            <ContactForm addContact={addContact} />

            { contacts.length >= 2
                ? <Filter stateFilter={stateFilter} filter={filter} contacts={contacts} />
                : null}

            <h2 className="subTitle">Contacts</h2>

            <TransitionGroup className="contactList" component="ul">
                {filterName().length >= 1
                    ? filterName().map(contact =>
                        <CSSTransition key={contact.id} classNames="list__item" timeout={800}>
                            <ContactList
                                {...contact}
                                deleteContact={deleteContact} />
                        </CSSTransition>)
                    : contacts.map(contact =>
                        <CSSTransition key={contact.id} classNames="list__item" timeout={800}>
                            <ContactList
                                {...contact}
                                deleteContact={deleteContact} />
                        </CSSTransition>)}
            </TransitionGroup>
        </>
    );
}


export default PhoneBooks;