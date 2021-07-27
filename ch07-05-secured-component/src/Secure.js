import Login from './Login'
import useSecurity from './useSecurity'

export default ({ children }) => {
  const { loggedIn } = useSecurity()

  return loggedIn ? children : <Login />
}
