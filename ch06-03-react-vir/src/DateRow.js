import moment from 'moment'

const DateRow = ({ index, style }) => (
  <div className={`aDate ${index % 2 && 'aDate-odd'}`} style={style}>
    {moment().add(index, 'd').format('dddd, MMMM Do YYYY')}
  </div>
)

export default DateRow
