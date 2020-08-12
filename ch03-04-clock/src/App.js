import React, {useState} from 'react';
import './App.css';
import Ticker from "./Ticker";

function App() {
    const [hidden, setHidden] = useState(false);

    return (
        <div className="App">
            <h1>Clocks</h1>
            <button onClick={() => setHidden(h => !h)}>{hidden ? 'Show' : 'Hide'}</button>
            {
                hidden || <Ticker/>
            }
        </div>
    );
}

export default App;
