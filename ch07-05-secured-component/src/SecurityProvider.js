import { useRef, useState } from 'react'
import SecurityContext from './SecurityContext'
import LoginForm from './LoginForm'

export default (props) => {
  const [showLogin, setShowLogin] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const resolver = useRef()
  const rejecter = useRef()

  const onLogin = async (username, password) => {
    // Note to engineering team:
    // Maybe make this more secure...
    if (username === 'fred' && password === 'password') {
      setLoggedIn(true)
    }
  }
  const onConfirmLogin = async (username, password) => {
    // Note to engineering team:
    // Same here...
    return username === 'fred' && password === 'password'
  }

  return (
    <SecurityContext.Provider
      value={{
        login: onLogin,
        confirmLogin: async (callback) => {
          setShowLogin(true)
          return new Promise((res, rej) => {
            resolver.current = res
            rejecter.current = rej
          })
        },
        logout: () => setLoggedIn(false),
        loggedIn,
      }}
    >
      {showLogin ? (
        <LoginForm
          onLogin={async (username, password) => {
            const valid = await onConfirmLogin(username, password)
            if (valid) {
              setShowLogin(false)
              resolver.current()
            }
          }}
          onCancel={() => {
            setShowLogin(false)
            rejecter.current()
          }}
        />
      ) : null}
      {props.children}
    </SecurityContext.Provider>
  )
}
