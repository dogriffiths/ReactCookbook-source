import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import About from "./About";
import OldAbout from "./OldAbout";

function App() {
  return (
    <main>
        <BrowserRouter>
            <ul role='navigation'>
                <li><Link to='/oldabout'>Old about</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/about/people'>About (people)</Link></li>
                <li><Link to='/about/offices'>About (offices)</Link></li>
            </ul>
            <Switch>
                <Route path="/oldabout">
                    <OldAbout/>
                </Route>
                <Route path="/about/:tabId?">
                    <About/>
                </Route>
                <p>Choose an option</p>
            </Switch>
        </BrowserRouter>
    </main>
  );
}

export default App;
