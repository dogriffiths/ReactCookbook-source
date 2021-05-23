import './Calendar.css'
import './Day.css'
import {Profiler, PureComponent} from "react";

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function isLeapYear(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

function daysInMonth(year, month) {
    return [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

function startOf(year, month) {
    return new Date(year, month - 1, 1, 12, 0, 0);
}

const MonthDay = ({day}) => {
    return <div>{(day)}</div>
}

function getMonthName(month) {
    const format = new Intl
        .DateTimeFormat('en-US', {month: 'long'}).format;
    return format(new Date(2030, month - 1, 15, 12, 0, 0));
}

const Month = ({month}) => {
    return <div>{getMonthName(month)}</div>
}

const Year = ({year}) => {
    return <div>{year}</div>
}

class Day extends PureComponent {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.day !== this.props.day;
    }

    render() {
        let shouldRender = this.props.day;
        return <div className='Day'>
            {
                <Profiler id={`Day-${this.props.day}`} onRender={this.props.onRender || (() => {})}>
                    {
                        shouldRender ?
                            <>
                                <MonthDay day={this.props.day}/>
                            </>
                            : null
                    }
                </Profiler>
            }
        </div>
    }
}

const Day1 = ({year, month, day, onRender}) => {
    let shouldRender = year && month && day;
    // let shouldRender = day;
    return <div className='Day'>
        {
            <Profiler id={`Day-${year}-${month}-${day}`} onRender={onRender || (() => {})}>
                {
                    shouldRender ?
                        <>
                            <MonthDay day={day}/>
                            <Month month={month}/>
                            <Year year={year}/>
                        </>
                        : null
                }
            </Profiler>
        }
    </div>
}

const Calendar = ({year, month, onRender}) => {
    const start = startOf(year, month);
    const days = [];

    for (let i = 0; i < start.getDay(); i++) {
        days.push(<Day key={`daySpace-${year}-${month}-${i}`}/>)
    }
    let dayLimit = daysInMonth(year, month);
    for (let day = 0; day < dayLimit; day++) {
        // days.push(<Day year={year} month={month} day={day} key={`day-${year}-${month}-${day}`} onRender={onRender}/>)
        days.push(<Day day={day} key={`day-${day}`} onRender={onRender}/>)
    }

    return <div className='Calendar'>
        <Profiler id='Calendar' onRender={onRender || (() => {
        })}>
            <h2>{getMonthName(month)}</h2>
            {days}
        </Profiler>
    </div>
}

export default Calendar;