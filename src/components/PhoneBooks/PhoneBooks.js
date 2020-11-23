import React, { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"
// import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./PhoneBooks.css"
import { useDispatch, useSelector } from 'react-redux';


const PhoneBooks = () => {
    const contacts = useSelector(state => state.contacts.items)
    const filter = useSelector(state => state.contacts.filter)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     const perContacts = localStorage.getItem("items")
    //     if (perContacts) {
    //         contacts.items.push(JSON.parse(perContacts))
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem("items", JSON.stringify(contacts.items))
    // }, [contacts.items])


    const filterName = () => {
        const filterArray = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        if (filterArray.length >= 1) {
            return filterArray
        } else {
            return contacts
        }
    }
    // const stateFilter = ({ target }) => {
    //     setFilter(target.value)
    // }
    // const closeAlert = () => {
    //     setAlert(false)
    // }


    return (
        <>
            {/* <CSSTransition classNames="alert__Box" mountOnEnter unmountOnExit timeout={800} in={alert}>
                <div className="alert__Box">
                    <h2>{`Контакт с таким именем  уже существует!`}</h2>
                    <button className="alertButton">ok</button>
                </div>
            </CSSTransition> */}


            <CSSTransition classNames="title" timeout={1000} in={true} appear={true}>
                <h1 className="title">Phonebook</h1>
            </CSSTransition>

            <ContactForm />

            <h2 className="subTitle">Contacts</h2>

            <Filter />

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