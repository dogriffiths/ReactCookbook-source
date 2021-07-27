import { useState } from 'react'

export default ({ onLogin, onCancel }) => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <div className={`LoginForm ${onCancel && 'LoginForm-floating'}`}>
      <div className="LoginForm-contents">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        />

        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />

        <br />
        <button onClick={() => onLogin(username, password)}>
          Login
        </button>
        {onCancel && <button onClick={onCancel}>Cancel</button>}
      </div>
    </div>
  )
}
