import './App.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Search from './Search'
import DebouncedSearch from './DebouncedSearch'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/debouncedSearch">
            <DebouncedSearch />
          </Route>
          <Route>
            <ul>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/debouncedSearch">Debounced search</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
