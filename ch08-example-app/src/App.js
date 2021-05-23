import {useEffect, useState} from 'react';
import Question from "./Question";
import Answer from "./Answer";
import Result from "./Result";
import './App.css';
import useOnline from "./useOnline";
import useClock from "./useClock";

function App() {
    const clock = useClock(1000);
    const online = useOnline();
    const [showTime, setShowTime] = useState(false);
    const [guess, setGuess] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [timedOut, setTimedOut] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [refreshTime, setRefreshTime] = useState(new Date().valueOf());

    useEffect(() => {
        setTimedOut(false);
        const timer = setTimeout(() => {
            setTimedOut(true);
        }, 30000);
        return () => clearTimeout(timer);
    }, [answer]);

    const postResult = async (guess, answer, result) => {
        const saveData = {guess, answer, result};

        console.log('Going to save this data')
        console.table([saveData]);

        const response = await fetch(`/api/result`, {
            method: 'POST',
            body: JSON.stringify(saveData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        if (response.status !== 200) {
            setErrorMessage('We are unable to save the result');
            console.error('There was a problem talking to the server', response.body);
        }
    }

    const submitted = (guess !== null);

    return (
        <div className="App">
            <Question
                onAnswer={setAnswer}
                refreshTime={refreshTime}
                disabled={submitted || timedOut}
            />
            <Answer
                onGuess={async (g) => {
                    // Uncomment the lines here to slow up the app
                    // setTimeout(() => {
                        setGuess(g);
                        postResult(g, answer, g === answer ? 'WIN' : 'LOSE');
                    // }, 2000);
                }}
                disabled={submitted || timedOut}
            />
            {
                (submitted || timedOut) &&
                <Result
                    guess={guess}
                    answer={answer}
                    timedOut={timedOut}
                    onPlayAgain={() => {
                        setGuess(null);
                        setRefreshTime(new Date().valueOf());
                    }}
                />
            }
            {
                errorMessage
            }
            {
                online || 'You are currently offline'
            }
            {
                showTime ?
                    <div>
                        <button onClick={() => setShowTime(false)}>Hide time</button>
                        Current date/time: {clock.toString()}
                    </div>
                    :
                    <button onClick={() => setShowTime(true)}>Show time</button>
            }

        </div>
    );
}

export default App;
