import {useState} from "react";

const usePersistentState = (name, dflt) => {
    let item = localStorage.getItem(name);
    const [v, setV] = useState(item ? JSON.parse(item) : dflt);

    return [
        v,
        x => {
            if (typeof x === 'function') {
                setV(i => {
                    const result = x(i);
                    localStorage.setItem(name, JSON.stringify(result));
                    return result;
                })
            } else {
                localStorage.setItem(name, JSON.stringify(x));
                setV(x);
            }
        }
    ]
}

export default usePersistentState;