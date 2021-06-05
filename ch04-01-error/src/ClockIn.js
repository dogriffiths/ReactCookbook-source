import useErrorHandler from './useErrorHandler'
import axios from 'axios'

const ClockIn = () => {
  const setVisibleError = useErrorHandler()

  const doClockIn = async () => {
    try {
      await axios.put('/clockTime')
    } catch (err) {
      setVisibleError('Unable to record work start time', err)
    }
  }

  return (
    <>
      <h1>Click Button to Record Start Time</h1>
      <button onClick={doClockIn}>Start work</button>
    </>
  )
}

export default ClockIn
