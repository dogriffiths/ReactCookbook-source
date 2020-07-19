import React from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import "./About.css";
import People from "./People";
import Offices from "./Offices";

export default () => {
    return <div className='About'>
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
        <Switch>
            <Route path='/about/people'>
                <People/>
            </Route>
            <Route path='/about/offices'>
                <Offices/>
            </Route>
            <Redirect to='/about/people'/>
        </Switch>
    </div>;
}