import React from "react";
import {NavLink, Redirect, useParams} from "react-router-dom";
import "./About.css";
import People from "./People";
import Offices from "./Offices";

export default () => {
    const {tabId} = useParams();

    if (!tabId) {
        return <Redirect to='about/people'/>;
    }

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
        {tabId === "people" && <People/>}
        {tabId === "offices" && <Offices/>}
    </div>;
}