import './App.css'
import logo from './logo.svg'
import InfoPanel from './InfoPanel'

function App() {
  return (
    <div className="App">
      <InfoPanel title="This is an expandable panel">
        <p>
          This is a component that uses CSS animation to expand and
          contract this detail panel
        </p>
        <img src={logo} alt="React logo" />
      </InfoPanel>
    </div>
  )
}

export default App
