import {Profiler} from 'react';
import {daysInMonth, getMonthName, startOf} from "./utils";
import Day from "./Day";
import './MonthCalendar.css';

const MonthCalendar = ({year, month, onRender}) => {
    const start = startOf(year, month);
    const days = [];

    for (let i = 1; i < start.getDay(); i++) {
        days.push(<Day key={`daySpace-${year}-${month}-${i}`}/>)
    }
    let dayLimit = daysInMonth(year, month);
    for (let day = 0; day < dayLimit; day++) {
        days.push(
            <Day
                day={day}
                month={month}
                year={year}
                key={`day-${day}-${month}-${year}`}
                onRender={onRender}
            />
        );
    }

    return <div className='MonthCalendar'>
        <Profiler id='MonthCalendar' onRender={onRender || (() => {
        })}>
            <h2>{getMonthName(month)}</h2>
            {days}
        </Profiler>
    </div>
}

export default MonthCalendar;