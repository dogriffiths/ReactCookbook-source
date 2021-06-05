import './App.css'
import ErrorContainer from './ErrorContainer'
import ClockIn from './ClockIn'

function App() {
  return (
    <div className="App">
      <ErrorContainer>
        <ClockIn />
      </ErrorContainer>
    </div>
  )
}

export default App
