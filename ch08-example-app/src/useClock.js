import {useEffect, useState} from "react";
import moment from "moment";

const useClock = (formatOrInterval) => {
    const format = (typeof formatOrInterval === 'string')
        ? formatOrInterval : 'YYYY-MM-DDTHH:mm:ss.SSS';
    const interval = (typeof formatOrInterval === 'number')
        ? formatOrInterval : 500;
    const [response, setResponse] = useState(
        moment(new Date()).format(format));

    useEffect(() => {
        const newTimer = setInterval(() => {
            setResponse(moment(new Date()).format(format));
        }, interval);

        return () => clearInterval(newTimer);
    }, [format, interval]);

    return response;
};

export default useClock;
