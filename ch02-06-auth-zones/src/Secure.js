import Login from './Login'
import useSecurity from './useSecurity'

const Secure = ({ children }) => {
  const { loggedIn } = useSecurity()

  return loggedIn ? children : <Login />
}

export default Secure
