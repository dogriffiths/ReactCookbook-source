import { useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Important from './Important'
import Alert from './Alert'

function App() {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmMessage, setConfirmMessage] = useState()
  const [confirmCallback, setConfirmCallback] = useState()

  return (
    <div className="App">
      <BrowserRouter
        getUserConfirmation={(message, callback) => {
          setConfirmMessage(message)
          // Use this setter form because callback is a function
          setConfirmCallback(() => callback)
          setConfirmOpen(true)
        }}
      >
        <Alert
          open={confirmOpen}
          title="Leave page?"
          message={confirmMessage}
          onOK={() => {
            confirmCallback(true)
            setConfirmOpen(false)
          }}
          onCancel={() => {
            confirmCallback(false)
            setConfirmOpen(false)
          }}
        />
        <Switch>
          <Route path="/important">
            <Important />
          </Route>
          <div>
            <h1>Home page</h1>
            <Link to="/important">Go to important page</Link>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
