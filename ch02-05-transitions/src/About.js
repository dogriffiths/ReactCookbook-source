import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import People from './People'
import Offices from './Offices'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group'

import './About.css'
import './fade.css'

const About = () => {
  const location = useLocation()

  return (
    <div className="About">
      <div className="About-tabs">
        <NavLink
          to="/about/people"
          className="About-tab"
          activeClassName="active"
        >
          People
        </NavLink>
        <NavLink
          to="/about/offices"
          className="About-tab"
          activeClassName="active"
        >
          Offices
        </NavLink>
      </div>
      <TransitionGroup className="About-tabContent">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={500}
        >
          <Switch location={location}>
            <Route path="/about/people">
              <People />
            </Route>
            <Route path="/about/offices">
              <Offices />
            </Route>
            <Redirect to="/about/people" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default About
