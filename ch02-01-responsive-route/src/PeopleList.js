import { NavLink } from 'react-router-dom'
import people from './people'
import './PeopleList.css'

const PeopleList = () => {
  return (
    <nav className="PeopleList">
      <ul>
        {people.map((person) => (
          <li key={`person-${person.id}`}>
            <NavLink
              activeClassName="currentPerson"
              to={`/people/${person.id}`}
            >
              {person.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PeopleList
