import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Menu from './Menu'
import Home from './Home'
import Boots from './Boots'
import Basket from './Basket'

import './App.css'
import reducer from './reducer'

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/boots">
              <Boots />
            </Route>
          </Switch>
          <Basket />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
