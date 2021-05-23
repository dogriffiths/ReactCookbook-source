import logo from './logo.svg';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Page2 from './Page2';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path='/page2'>
                    <Page2/>
                </Route>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Link to='/page2'>Go to page 2</Link>
                </header>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
