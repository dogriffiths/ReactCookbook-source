import {Profiler} from 'react';
import MonthDay from "./MonthDay";
import './Day.css';

const Day = ({year, month, day, onRender}) => {
    let shouldRender = year && month && day;
    return <div className='Day'>
        {
            <Profiler id={`Day-${year}-${month}-${day}`} onRender={onRender || (() => {})}>
                {
                    shouldRender ?
                        <>
                            <MonthDay day={day}/>
                            {/*<Month month={month}/>*/}
                            {/*<Year year={year}/>*/}
                        </>
                        : null
                }
            </Profiler>
        }
    </div>
}

export default Day;