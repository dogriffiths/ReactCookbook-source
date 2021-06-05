const Details = ({ redTelemetry, blueTelemetry }) => {
  return (
    <table className="tracking">
      <thead>
        <tr>
          <th>Vehicle</th>
          <th>Distance</th>
          <th>Speed</th>
          <th>Lap</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Red</td>
          <td>{(500 * redTelemetry.dist).toFixed(2)}</td>
          <td>{(500 * redTelemetry.speed).toFixed(2)}</td>
          <td>{redTelemetry.lap}</td>
        </tr>
        <tr>
          <td>Blue</td>
          <td>{(500 * blueTelemetry.dist).toFixed(2)}</td>
          <td>{(500 * blueTelemetry.speed).toFixed(2)}</td>
          <td>{blueTelemetry.lap}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Details
