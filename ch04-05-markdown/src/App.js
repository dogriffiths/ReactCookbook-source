import './App.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Forum from './Forum'
import MarkdownForum from './MarkdownForum'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/simple">
            <Forum />
          </Route>
          <Route exact path="/markdown">
            <MarkdownForum />
          </Route>
          <ul>
            <li>
              <Link to="/simple">Simple</Link>
            </li>
            <li>
              <Link to="/markdown">Markdown</Link>
            </li>
          </ul>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
