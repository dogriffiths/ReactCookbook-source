import './App.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Search from './Search'
import CancelableSearch from './CancelableSearch'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/cancelableSearch">
            <CancelableSearch />
          </Route>
          <Route>
            <ul>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/cancelableSearch">Cancelable search</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
