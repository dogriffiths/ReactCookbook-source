import { useReducer, useState } from 'react'
import './App.css'
import deletionReducer from './deletionReducer'

function App() {
  const [state, dispatch] = useReducer(deletionReducer, {})
  const [password, setPassword] = useState()

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch({ type: 'START_DELETION' })
        }}
        disabled={state.deleteButtonDisabled}
      >
        Delete Widget!
      </button>
      <div className="App-message">{state.message}</div>
      {state.showLogin && (
        <div className="App-dialog">
          <p>Enter your password</p>
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <button
            onClick={() =>
              dispatch({ type: 'LOGIN', payload: password })
            }
          >
            Login
          </button>
          <button
            onClick={() => dispatch({ type: 'CANCEL_DELETION' })}
          >
            Cancel
          </button>
          <div className="App-error">{state.loginError}</div>
        </div>
      )}
      {state.showConfirmation && (
        <div className="App-dialog">
          <p>Are you sure you want to delete the widget?</p>
          <button
            onClick={() =>
              dispatch({
                type: 'CONFIRM_DELETION',
              })
            }
          >
            Yes
          </button>
          <button
            onClick={() =>
              dispatch({
                type: 'CANCEL_DELETION',
              })
            }
          >
            No
          </button>
        </div>
      )}
      {state.showResult && (
        <div className="App-dialog">
          <p>The widget was deleted</p>
          <button
            onClick={() =>
              dispatch({
                type: 'FINISH',
              })
            }
          >
            Done
          </button>
        </div>
      )}
    </div>
  )
}

export default App
