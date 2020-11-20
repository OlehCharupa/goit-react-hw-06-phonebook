import React from 'react';
import "./Filter.css"
import { CSSTransition } from 'react-transition-group';
const Filter = ({ filter, stateFilter, contacts }) => {

    return (
        <CSSTransition classNames="labelSearch" mountOnEnter unmountOnExit in={contacts.length >= 2} timeout={800}>
            <label className="labelSearch" >
                Find contacts by name
            <input
                    className="inputSearch"
                    name="filter"
                    type="text"
                    value={filter}
                    onChange={stateFilter}
                />
            </label>
        </CSSTransition>
    );
};
export default Filter;

