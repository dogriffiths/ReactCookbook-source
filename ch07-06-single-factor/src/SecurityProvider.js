import { useState } from 'react'
import SecurityContext from './SecurityContext'
import { get } from '@github/webauthn-json'
import axios from 'axios'

const SecurityProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <SecurityContext.Provider
      value={{
        login: async (username, password) => {
          const response = await axios.post('/login', {
            username,
            password,
          })
          setLoggedIn(true)
        },
        loginWithToken: async (userID) => {
          const response = await axios.post('/startVerify', {
            userID,
          })
          const assertion = await get({ publicKey: response.data })
          await axios.post('/verify', { userID, assertion })
          setLoggedIn(true)
        },
        logout: async () => {
          await axios.post('/logout')
          setLoggedIn(false)
        },
        loggedIn,
      }}
    >
      {props.children}
    </SecurityContext.Provider>
  )
}
export default SecurityProvider
