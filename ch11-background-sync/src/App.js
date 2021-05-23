import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const sendData = () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({timeIs: new Date()}),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('/endpoint', options)
    };
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <button
              onClick={sendData}
          >Send data to server</button>
      </header>
    </div>
  );
}

export default App;
