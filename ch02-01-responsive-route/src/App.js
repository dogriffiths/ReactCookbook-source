import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import PeopleContainer from "./PeopleContainer";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/people'>
                <PeopleContainer/>
            </Route>
            <Route>
                <Link to='/people'>People</Link>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
