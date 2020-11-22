import React from 'react';
import "./Filter.css"
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { editInputFilter } from '../../redux/action/filterAction';
const Filter = () => {
    const filter = useSelector(state => state.contacts.filter)
    const dispatch = useDispatch()
    const inputFilter = ({ target }) => {
        dispatch(editInputFilter(target.value))
    }


    return (
        <CSSTransition classNames="labelSearch" mountOnEnter unmountOnExit in={true} timeout={800}>
            <label className="labelSearch" >
                Find contacts by name
            <input
                    className="inputSearch"
                    name="filter"
                    type="text"
                    value={filter}
                    onChange={inputFilter}
                />
            </label>
        </CSSTransition>
    );
};
export default Filter;

