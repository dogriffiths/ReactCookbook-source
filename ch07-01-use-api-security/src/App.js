import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Public from "./Public";
import Private1 from "./Private1";
import Private2 from "./Private2";
import Home from "./Home";
import SecurityProvider from "./SecurityProvider";
import SecureRoute from "./SecureRoute";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SecurityProvider>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <SecureRoute path='/private1'>
                            <Private1/>
                        </SecureRoute>
                        <SecureRoute path='/private2'>
                            <Private2/>
                        </SecureRoute>
                        <Route exact path='/public'>
                            <Public/>
                        </Route>
                    </Switch>
                </SecurityProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
