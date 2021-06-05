import { useEffect, useState } from 'react'
import useClock from './useClock'
import ClockFace from './ClockFace'

import './Ticker.css'

const Ticker = () => {
  const [isMinutes, setMinutes] = useState(false)
  const [isTick, setTick] = useState(false)
  const [isTickDate, setTickDate] = useState(false)
  const [isTick3, setTick3] = useState(false)

  const time = useClock(isMinutes ? 'HH:mm' : 'HH:mm:ss')
  const date = useClock('MMMM DD, YYYY')
  const tickThreeSeconds = useClock(3000)

  useEffect(() => {
    setTick((t) => !t)
  }, [time])

  useEffect(() => {
    setTickDate((t) => !t)
  }, [date])

  useEffect(() => {
    setTick3((t) => !t)
  }, [tickThreeSeconds])

  return (
    <div className="Ticker">
      <div className="Ticker-clock">
        <h1>Time {isTick ? 'Tick!' : 'Tock!'}</h1>
        <button onClick={() => setMinutes((m) => !m)}>
          {isMinutes ? 'Show seconds' : 'Hide seconds'}
        </button>
        <br />
        {time}
        <br />
        <ClockFace time={time} />
      </div>
      <div className="Ticker-clock">
        <h1>Date {isTickDate ? 'Tick!' : 'Tock!'}</h1>
        {date}
      </div>
      <div className="Ticker-clock">
        <h1>{isTick3 ? '3 Second Tick!' : '3 Second Tock!'}</h1>
        {tickThreeSeconds}
      </div>
    </div>
  )
}

export default Ticker
