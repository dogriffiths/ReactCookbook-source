import { useState } from 'react'
import logo from './logo.svg'
import HelpSequence from './HelpSequence'
import './App.css'

function App() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => setShowHelp(true)}>Show help</button>
      <HelpSequence
        sequence={[
          {
            forElement: 'p',
            text: 'This is some introductory text telling you how to start',
          },
          {
            forElement: '.App-link',
            text: 'This will show you how to use React',
          },
          {
            forElement: '.App-nowhere',
            text: 'This help text will never appear',
          },
        ]}
        open={showHelp}
        onClose={() => setShowHelp(false)}
      />
    </div>
  )
}

export default App
