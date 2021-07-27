import { useState } from 'react'
import useSecurity from './useSecurity'

const Login = () => {
  const { login } = useSecurity()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Login Page</h1>

      <p>You need to log in. (hint: try fred@example.com/password)</p>

      <label htmlFor="username">Username:</label>
      <input
        id="j_username"
        name="j_username"
        type="email"
        autoCorrect="off"
        autoComplete="username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />

      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />

      <br />
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  )
}
export default Login
