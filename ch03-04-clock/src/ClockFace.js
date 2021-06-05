const WIDTH = 230
const HEIGHT = 220

function offsets(degrees, length) {
  let angle = (degrees * Math.PI) / 180.0
  return [length * Math.sin(angle), length * Math.cos(angle)]
}

const Markers = ({
  intervals,
  innerRadius,
  outerRadius,
  color,
  strokeWidth,
  centerX = WIDTH / 2,
  centerY = HEIGHT / 2,
}) => {
  return new Array(intervals).fill(0).map((m, i) => {
    const inner = offsets((i * 360) / intervals, innerRadius)
    const outer = offsets((i * 360) / intervals, outerRadius)
    return (
      <>
        <line
          x1={centerX + inner[0]}
          y1={centerY + inner[1]}
          x2={centerX + outer[0]}
          y2={centerY + outer[1]}
          stroke={color}
          strokeWidth={strokeWidth}
          stroke-linecap="round"
        />
      </>
    )
  })
}

const ClockFace = ({ time }) => {
  const hms = time.split(':')
  const h = parseInt(hms[0])
  const m = parseInt(hms[1])
  const s = hms.length > 2 ? parseInt(hms[2]) : 0
  const [hoursX, hoursY] = offsets(30 * (h + m / 60 + s / 3600), 50)
  const [minutesX, minutesY] = offsets(6 * (m + s / 60), 85)
  const [secondsX, secondsY] = offsets(6 * parseInt(hms[2]), 20)

  const fiveMinutes = new Array(12).fill(0).map((m, i) => {
    const label = offsets(i * 30, 70)
    return (
      <text
        x="0"
        y="15"
        stroke="#c7d4f4"
        fill="#c7d4f4"
        style={{ fontSize: '11px', fontWeight: 'bold' }}
        text-anchor="middle"
        transform={`translate(${WIDTH / 2 + label[0]},${
          HEIGHT / 2 - label[1] - 11
        })`}
      >
        {i === 0 ? '12' : i < 10 ? '0' + i : i}
      </text>
    )
  })

  function arm(x, y, xs, ys) {
    return (
      <>
        <line
          x1={WIDTH / 2}
          y1={HEIGHT / 2}
          x2={WIDTH / 2 + x}
          y2={HEIGHT / 2 - y}
          stroke-linecap="round"
          stroke="red"
          strokeWidth={2}
        />
        <line
          x1={WIDTH / 2 + xs}
          y1={HEIGHT / 2 - ys}
          x2={WIDTH / 2 + x}
          y2={HEIGHT / 2 - y}
          stroke-linecap="round"
          stroke="red"
          strokeWidth={7}
        />
        <line
          x1={WIDTH / 2 + xs}
          y1={HEIGHT / 2 - ys}
          x2={WIDTH / 2 + x}
          y2={HEIGHT / 2 - y}
          stroke-linecap="round"
          stroke="#b20000"
          strokeWidth={4}
        />
      </>
    )
  }

  const minuteArm = arm(
    minutesX,
    minutesY,
    minutesX / 7,
    minutesY / 7
  )

  const hourArm = arm(hoursX, hoursY, hoursX / 4, hoursY / 4)

  const secondsArm = (
    <line
      x1={WIDTH / 2 - secondsX / 4}
      y1={HEIGHT / 2 + 35 + secondsY / 4}
      x2={WIDTH / 2 + secondsX}
      y2={HEIGHT / 2 + 35 - secondsY}
      stroke-linecap="round"
      stroke="#e5321e"
      fill="#bc0507"
      strokeWidth={4}
    />
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: 'black' }}
      width={WIDTH}
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <Markers
        intervals={60}
        innerRadius={85}
        outerRadius={95}
        color="#4c507d"
        strokeWidth={2}
      />
      <Markers
        intervals={12}
        innerRadius={85}
        outerRadius={95}
        color="#cfddfa"
        strokeWidth={7}
      />
      {fiveMinutes}
      {hms[2] ? (
        <>
          <Markers
            intervals={12}
            innerRadius={20}
            outerRadius={25}
            color="#4c507d"
            centerX={WIDTH / 2}
            centerY={145}
          />
          {secondsArm}
          <circle
            cx={WIDTH / 2}
            cy={HEIGHT / 2 + 35}
            r="3.5"
            stroke="#e5321e"
            fill="#bc0507"
            strokeWidth="1"
          />
        </>
      ) : null}
      {hourArm}
      {minuteArm}
      <circle
        cx={WIDTH / 2}
        cy={HEIGHT / 2}
        r="3.5"
        stroke="red"
        fill="#b20000"
        strokeWidth="2"
      />
    </svg>
  )
}

export default ClockFace
