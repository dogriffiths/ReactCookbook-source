import useSecurity from './useSecurity'
import LoginForm from './LoginForm'

export default () => {
  const { login } = useSecurity()

  return (
    <div>
      <h1>Login Page</h1>

      <p>You need to log in. (hint: try fred/password)</p>

      <LoginForm onLogin={login} />
    </div>
  )
}
