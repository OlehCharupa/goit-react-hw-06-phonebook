import React, { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
import { alertClose } from "../../redux/action/alertAction"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./PhoneBooks.css"
import { useDispatch, useSelector } from 'react-redux';
import { setContactLocalStorage } from '../../redux/action/phoneBookAction';


const PhoneBooks = () => {
    const contacts = useSelector(state => state.contacts.items)
    const filter = useSelector(state => state.contacts.filter)
    const alert = useSelector(state => state.contacts.isAlert)
    const dispatch = useDispatch()


    useEffect(() => {
        const localStorageContacts = localStorage.getItem("items")
        const fff = JSON.parse(localStorageContacts)
        if (localStorageContacts) {
            dispatch(setContactLocalStorage(fff))
        }
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(contacts))
    }, [contacts])



    const closeAlert = () => {
        dispatch(alertClose())
    }

    const filterName = () => {
        const filterArray = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        if (filterArray.length >= 1) {
            return filterArray
        } else {
            return contacts
        }
    }



    return (
        <>
            {alert && <CSSTransition classNames="alert__Box" mountOnEnter unmountOnExit timeout={800} in={alert}>
                <div className="alert__Box">
                    <h2>{`Контакт с таким именем  уже существует!`}</h2>
                    <button className="alertButton" onClick={closeAlert}>ok</button>
                </div>
            </CSSTransition>
            }


            <CSSTransition classNames="title" timeout={1000} in={true} appear={true}>
                <h1 className="title">Phonebook</h1>
            </CSSTransition>

            <ContactForm />

            <h2 className="subTitle">Contacts</h2>

            { filterName().length >= 2
                ? <Filter />
                : null
            }

            <TransitionGroup className="contactList" component="ul">
                {filterName().map(contact =>
                    <CSSTransition key={contact.id} classNames="list__item" timeout={800}>
                        <ContactList {...contact} />
                    </CSSTransition>)}
            </TransitionGroup>
        </>
    );
}


export default PhoneBooks;