import { useCallback, useState } from 'react'
import './App.css'
import useKeyListener from './useKeyListener'

const RIGHT_ARROW = 39
const LEFT_ARROW = 37
const ESCAPE = 27

function App() {
  const [angle, setAngle] = useState(0)
  const [lastKey, setLastKey] = useState('')

  let onKeyDown = useCallback(
    (evt) => {
      if (evt.keyCode === LEFT_ARROW) {
        setAngle((c) => Math.max(-360, c - 10))
        setLastKey('Left')
      } else if (evt.keyCode === RIGHT_ARROW) {
        setAngle((c) => Math.min(360, c + 10))
        setLastKey('Right')
      } else if (evt.keyCode === ESCAPE) {
        setAngle(0)
        setLastKey('Escape')
      }
    },
    [setAngle]
  )
  useKeyListener(onKeyDown)

  return (
    <div className="App">
      <p>
        Angle: {angle} Last key: {lastKey}
      </p>
      <svg
        width="400px"
        height="400px"
        title="arrow"
        fill="none"
        strokeWidth="10"
        stroke="black"
        style={{
          transform: `rotate(${angle}deg)`,
        }}
      >
        <polyline points="100,200 200,0 300,200" />
        <polyline points="200,0 200,400" />
      </svg>
    </div>
  )
}

export default App
