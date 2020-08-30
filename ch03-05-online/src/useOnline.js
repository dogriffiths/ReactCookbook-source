import {useEffect, useState} from "react";

export default () => {
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        if (window.addEventListener) {
            window.addEventListener("online", () => setOnline(true), false);
            window.addEventListener("offline", () => setOnline(false), false);
        } else {
            document.body.ononline = () => setOnline(true);
            document.body.onoffline = () => setOnline(false);
        }
    }, []);

    return online;
}
