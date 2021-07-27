import { useEffect, useState } from 'react'
import useSecurity from './useSecurity'
import Cookies from 'js-cookie'

const Login = () => {
  const { login, loginWithToken } = useSecurity()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const userIDCookie = Cookies.get('userID')

  useEffect(() => {
    ;(async () => {
      if (userIDCookie) {
        loginWithToken(userIDCookie)
      }
    })()
  }, [userIDCookie])

  return (
    <div>
      <h1>Login Page</h1>

      <p>You need to log in.</p>

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
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  )
}

export default Login
