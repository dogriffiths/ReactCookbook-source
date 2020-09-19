import React from "react";

function offsets(degrees, length) {
    let angle = degrees * Math.PI / 180.0;
    return [(length * Math.sin(angle)), (length * Math.cos(angle))];
}

const Markers = ({intervals, innerRadius, outerRadius, color, strokeWidth, centerX = 110, centerY = 110}) => {
    return new Array(intervals).fill(0).map((m, i) => {
        const inner = offsets(i * 360 / intervals, innerRadius);
        const outer = offsets(i * 360 / intervals, outerRadius);
        return <>
            <line
                x1={centerX + inner[0]}
                y1={centerY + inner[1]}
                x2={centerX + outer[0]}
                y2={centerY + outer[1]}
                stroke={color}
                strokeWidth={strokeWidth}
                stroke-linecap="round"
            />
        </>
    });
}

export default ({time}) => {
    const hms = time.split(':');
    const [hoursX, hoursY] = offsets(30 * parseInt(hms[0]), 50);
    const [minutesX, minutesY] = offsets(6 * parseInt(hms[1]), 85);
    const [secondsX, secondsY] = offsets(6 * parseInt(hms[2]), 20);

    const fiveMinutes = new Array(12).fill(0).map((m, i) => {
        const label = offsets(i * 30, 70);
        return <text x="0" y="15" stroke='#c7d4f4' fill='#c7d4f4'
                     style={{fontSize: '11px', fontWeight: 'bold'}}
                     text-anchor="middle"
                     transform={`translate(${110 + label[0]},${100 - label[1]})`}>{i === 0 ? '12' : i < 10 ? '0' + i : i}</text>
    });

    function arm(x, y, xs, ys) {
        return <>
            <line x1={110} y1={110} x2={110 + x} y2={110 - y}
                  stroke-linecap="round" stroke="red" strokeWidth={2}/>
            <line x1={110 + xs} y1={110 - ys} x2={110 + x} y2={110 - y}
                  stroke-linecap="round" stroke="red" strokeWidth={7}/>
            <line x1={110 + xs} y1={110 - ys} x2={110 + x} y2={110 - y}
                  stroke-linecap="round" stroke='#b20000' strokeWidth={4}/>
        </>;
    }

    const minuteArm = arm(minutesX, minutesY, minutesX / 7, minutesY / 7);

    const hourArm = arm(hoursX, hoursY, hoursX / 4, hoursY / 4);

    const secondsArm = <line x1={110 - (secondsX / 4)} y1={145 + (secondsY / 4)} x2={110 + secondsX} y2={145 - secondsY}
              stroke-linecap="round" stroke="#e5321e" fill='#bc0507' strokeWidth={4}/>;

    return <svg xmlns="http://www.w3.org/2000/svg"
                style={{backgroundColor: 'black'}}
                width={200}
                height={200}
                viewBox="0 0 220 220">
        <Markers intervals={60} innerRadius={85} outerRadius={95} color='#4c507d' strokeWidth={2}/>
        <Markers intervals={12} innerRadius={85} outerRadius={95} color='#cfddfa' strokeWidth={7}/>
        {fiveMinutes}
        {
            hms[2] ? <>
                    <Markers intervals={12} innerRadius={20} outerRadius={25} color='#4c507d' centerX={110}
                             centerY={145}/>
                    {secondsArm}
                    <circle cx="110" cy="145" r="3.5" stroke="#e5321e" fill='#bc0507' strokeWidth="1"/>
                </>
                : null
        }
        {hourArm}
        {minuteArm}
        <circle cx="110" cy="110" r="3.5" stroke="red" fill='#b20000' strokeWidth="2"/>
    </svg>
        ;
}