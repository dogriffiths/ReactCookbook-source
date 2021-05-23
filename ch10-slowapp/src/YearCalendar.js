import {Profiler} from 'react';
import Calendar from "./Calendar";

const YearCalendar = ({year, onRender}) => {
    const cals = [];

    for (let i = 1; i <= 12; i++) {
        cals.push(<Calendar year={year} month={i} key={`calendar-${year}-${i}`} onRender={onRender}/>)
    }
    return <Profiler id='YearCalendar' onRender={onRender || (() => {})}>
        <h1>Year: {year}</h1>
        {cals}
    </Profiler>;
}

export default YearCalendar;