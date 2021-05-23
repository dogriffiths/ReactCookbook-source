import {useState, Profiler} from "react";
import './App.css';
import YearCalendar from "./YearCalendar";


function App({onRender}) {
    const [year, setYear] = useState(2023);

    return (
        <div className="App">
            <h1>Year: {year}</h1>
            <Profiler id='app' onRender={onRender || (() => {})}>
                <button
                    onClick={() => setYear(y => y - 1)}
                >Previous</button>
                <button
                    onClick={() => setYear(y => y + 1)}
                >Next</button>
                <YearCalendar year={year} onRender={onRender}/>
            </Profiler>
        </div>
    );
}

export default App;
