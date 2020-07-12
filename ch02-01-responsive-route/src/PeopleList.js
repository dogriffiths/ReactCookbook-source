import React from 'react';
import {NavLink} from "react-router-dom";
import people from './people';
import './PeopleList.css';

export default () => {
    return <nav className='PeopleList'>
        <ul>
            {
                people.map(person => <li key={`person-${person.id}`}>
                    <NavLink
                        activeClassName='currentPerson'
                        to={`/people/${person.id}`}
                    >
                        {person.name}
                    </NavLink>
                </li>)
            }
        </ul>
    </nav>;
};