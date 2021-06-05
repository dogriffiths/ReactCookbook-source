import { FixedSizeList } from 'react-window'
import DateRow from './DateRow'
import './App.css'

function App() {
  return (
    <div className="App">
      <FixedSizeList
        height={400}
        itemCount={10000}
        itemSize={40}
        width={300}
      >
        {DateRow}
      </FixedSizeList>
    </div>
  )
}

export default App
