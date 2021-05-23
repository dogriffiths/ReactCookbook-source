import {useState, Profiler} from "react";
import YearCalendar from "./YearCalendar";
import { unstable_trace as trace } from "scheduler/tracing";
import './App.css';

// let renders = [];
// let tracker = (
//     id,
//     phase,
//     actualDuration,
//     baseDuration,
//     startTime,
//     commitTime,
//     interactions
// ) => {
//     renders.push({
//         id,
//         phase,
//         actualDuration,
//         baseDuration,
//         startTime,
//         commitTime,
//         interactions: JSON.stringify(Array.from(interactions))
//     })
// };

function App({onRender}) {
    const [year, setYear] = useState(2023);

    return (
        <div className="App">
            <h1>Year: {year}</h1>
            <Profiler id='app' onRender={onRender || (() => {})}>
            {/*<Profiler id='app' onRender={tracker}>*/}
                <button
                    onClick={() => {
                        trace("previous button click", performance.now(), () => {
                            setYear(y => y - 1);
                        });
                    }}
                >Previous</button>
                <button
                    onClick={() => setYear(y => y + 1)}
                >Next</button>
                <br/>
                <YearCalendar year={year} onRender={onRender}/>
            </Profiler>
            {/*<button onClick={() => console.table(renders)}>Stats</button>*/}
        </div>
    );
}

export default App;
