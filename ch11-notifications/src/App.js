import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const startTask = () => {
        Notification.requestPermission(
            (permission) => {
                navigator.serviceWorker.ready.then(() => {
                    const notifyMe = permission === 'granted';
                    navigator.serviceWorker.controller.postMessage({
                        type: 'DO_SLOW_THING',
                        notifyMe
                    });
                });
            }
        );
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {
                    ('serviceWorker' in navigator) &&
                    <button onClick={startTask}
                    >Do slow thing</button>
                }
            </header>
        </div>
    );
}

export default App;
