import {lazy, Suspense} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import "./About.css";
import People from './People'
// import Offices from './Offices'
// const People = lazy(() => import("./People"));
const Offices = lazy(() => import("./Offices"));

const About = () =>
    <div className='About'>
        <div className='About-tabs'>
            <NavLink to="/about/people"
                     className="About-tab"
                     activeClassName="active">
                People
            </NavLink>
            <NavLink to="/about/offices"
                     className="About-tab"
                     activeClassName="active">
                Offices
            </NavLink>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path='/about/people'>
                    <People/>
                </Route>
                <Route path='/about/offices'>
                    <Offices/>
                </Route>
                <Redirect to='/about/people'/>
            </Switch>
        </Suspense>
    </div>;

export default About;