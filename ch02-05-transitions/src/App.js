import './App.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import About from './About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/about/:tabId?">
            <About />
          </Route>
          <div>
            <h1>Home</h1>
            <Link to="/about">About</Link>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
