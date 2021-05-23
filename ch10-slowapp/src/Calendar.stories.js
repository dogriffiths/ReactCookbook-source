import Calendar from "./Calendar";
import {useState} from "react";

export default {
    title: 'Calendar',
    component: Calendar,
};

export const Basic = () => <Calendar year={2021} month={4}/>

// export const Navigation = () => {
//     const [month, setMonth] = useState(4);
//     return <div>
//         <button
//             onClick={() => setMonth(m => m - 1)}
//         >Previous</button>
//         <button
//             onClick={() => setMonth(m => m + 1)}
//         >Next</button>
//         <Calendar year={2021} month={month}/>
//     </div>
// }
//
// export const Lots = () => {
//     const cals = [];
//
//     for (let i = 1; i <= 12; i++) {
//         cals.push(<Calendar year={2021} month={i}/>)
//     }
//     return cals;
// }

export const YearCalendar = () => <YearCalendar/>;