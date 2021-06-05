import { useState } from 'react'
import TweenOne from 'rc-tween-one'
import Details from './Details'
import path from './track'
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin'
import grid from './grid.svg'

import './App.css'

TweenOne.plugins.push(PathPlugin)

const followAnimation = {
  path: { x: path, y: path, rotate: path },
  repeat: -1,
}

function App() {
  const [redTelemetry, setRedTelemetry] = useState({
    dist: 0,
    speed: 0,
    lap: 0,
  })
  const [blueTelemetry, setBlueTelemetry] = useState({
    dist: 0,
    speed: 0,
    lap: 0,
  })

  const trackVehicle = (info, telemetry) => ({
    dist: info.ratio,
    speed: info.ratio - telemetry.dist,
    lap:
      info.ratio < telemetry.dist ? telemetry.lap + 1 : telemetry.lap,
  })

  return (
    <div className="App">
      <h1>Nürburgring</h1>
      <Details
        redTelemetry={redTelemetry}
        blueTelemetry={blueTelemetry}
      />
      <svg
        height="600"
        width="1000"
        viewBox="0 0 1000 600"
        style={{ backgroundColor: 'black' }}
      >
        <image href={grid} width={1000} height={600} />
        <path stroke="#444" strokeWidth={10} fill="none" d={path} />
        <path
          stroke="#c0c0c0"
          strokeWidth={2}
          strokeDasharray="3 4"
          fill="none"
          d={path}
        />

        <TweenOne
          component="g"
          animation={{
            ...followAnimation,
            duration: 16000,
            onUpdate: (info) =>
              setRedTelemetry((telemetry) =>
                trackVehicle(info, telemetry)
              ),
          }}
        >
          <rect width={24} height={16} x={-12} y={-8} fill="red" />
          <rect width={2} height={6} x={3} y={-3} fill="white" />
        </TweenOne>

        <TweenOne
          component="g"
          animation={{
            ...followAnimation,
            delay: 3000,
            duration: 15500,
            onUpdate: (info) =>
              setBlueTelemetry((telemetry) =>
                trackVehicle(info, telemetry)
              ),
          }}
        >
          <rect width={24} height={16} x={-12} y={-8} fill="blue" />
          <rect width={2} height={6} x={3} y={-3} fill="white" />
        </TweenOne>
      </svg>
    </div>
  )
}

export default App
