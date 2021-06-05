import { useEffect, useState } from 'react'
import useClock from './useClock'

import './Ticker.css'

const IntervalTicker = () => {
  const [isTick3, setTick3] = useState(false)

  const tickThreeSeconds = useClock(3000)

  useEffect(() => {
    setTick3((t) => !t)
  }, [tickThreeSeconds])

  return (
    <div className="Ticker">
      <div className="Ticker-clock">
        <h1>{isTick3 ? '3 Second Tick!' : '3 Second Tock!'}</h1>
        {tickThreeSeconds}
      </div>
    </div>
  )
}

export default IntervalTicker
