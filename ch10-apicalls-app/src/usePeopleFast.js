import {useEffect, useState} from "react";
import {get} from "./fakeios";
import timekeeper from "./timekeeper";

const t = timekeeper();

const usePeopleFast = (...ids) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        let didCancel = false;
        (async () => {
            t.next();
            const result = await Promise.all(
                ids.map(id => get('/people/' + id))
            );
            if (!didCancel) {
                console.log('usePeopleSlow took', t.next().value)
                setPeople(result);
            }
        })();
        return () => {didCancel = true;}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...ids]);

    return people;
}

export default usePeopleFast;