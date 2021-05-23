// This way is slower. It will render intermediate results. That in itself might be a bad thing
import {useEffect, useState} from "react";
import {get} from "./fakeios";
import timekeeper from "./timekeeper";

const t = timekeeper();

const usePeopleSlow = (...ids) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        let didCancel = false;
        (async () => {
            t.next();
            const result = [];
            for (let i = 0; i < ids.length; i++) {
                const id = ids[i];
                result.push(await get('/people/' + id));
            }
            if (!didCancel) {
                console.log('usePeopleSlow took', t.next().value)
                setPeople(result);
            }
        })();
        return () => {
            didCancel = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...ids]);

    return people;
}

export default usePeopleSlow;