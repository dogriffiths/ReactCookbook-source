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
          const { data } = response
          if (data.twoFactorNeeded) {
            const userID = data.userID
            const response = await axios.post('/startVerify', {
              userID,
            })
            const assertion = await get({ publicKey: response.data })
            const resp2 = await axios.post('/verify', {
              userID,
              assertion,
            })
            if (resp2.data && resp2.data.verified) {
              setLoggedIn(true)
            }
          } else {
            setLoggedIn(true)
          }
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
