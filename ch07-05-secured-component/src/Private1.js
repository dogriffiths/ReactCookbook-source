import { useState } from 'react'
import Logout from './Logout'
import useSecurity from './useSecurity'

export default () => {
  const security = useSecurity()
  const [message, setMessage] = useState()

  const doDangerousThing = async () => {
    try {
      await security.confirmLogin()
      setMessage('DANGEROUS ACTION!')
    } catch (err) {
      setMessage('DANGEROUS ACTION CANCELLED!')
    }
  }

  return (
    <div className="Private1">
      <h1>Private page 1</h1>

      <button
        onClick={() => {
          doDangerousThing()
        }}
      >
        Do dangerous thing
      </button>

      <p className="message">{message}</p>

      <Logout />
    </div>
  )
}
