import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Public from "./Public";
import Private1 from "./Private1";
import Private2 from "./Private2";
import Secure from "./Secure";
import Home from "./Home";
import SecurityProvider from "./SecurityProvider";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SecurityProvider>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route exact path='/public'>
                            <Public/>
                        </Route>
                        <Secure>
                            <Route path='/private1'>
                                <Private1/>
                            </Route>
                            <Route path='/private2'>
                                <Private2/>
                            </Route>
                        </Secure>
                    </Switch>
                </SecurityProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
