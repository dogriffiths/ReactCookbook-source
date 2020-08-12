import React from "react";

function offsets(degrees, length) {
    let angle = degrees * Math.PI / 180.0;
    return [(length * Math.sin(angle)), (length * Math.cos(angle))];
}

export default ({time}) => {
    const hms = time.split(':');
    const [hoursX, hoursY] = offsets(30 * parseInt(hms[0]), 50);
    const [minutesX, minutesY] = offsets(6 * parseInt(hms[1]), 70);
    const [secondsX, secondsY] = offsets(6 * parseInt(hms[2]), 80);

    return <svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="3" fill='none'/>
        <line x1="100" y1={100} x2={100 + hoursX} y2={100 - hoursY} stroke='black' strokeWidth={3}/>
        <line x1="100" y1={100} x2={100 + minutesX} y2={100 - minutesY} stroke='black' strokeWidth={3}/>
        {
            hms[2] &&
            <line x1="100" y1={100} x2={100 + secondsX} y2={100 - secondsY} stroke='black'/>
        }
    </svg>;
}