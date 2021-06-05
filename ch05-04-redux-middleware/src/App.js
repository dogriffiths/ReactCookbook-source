import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './App.css'

import reducer from './reducer'
import Search from './Search'
import axiosMiddleware from './axiosMiddleware'

const store = createStore(reducer, applyMiddleware(axiosMiddleware))

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Search />
      </Provider>
    </div>
  )
}

export default App
