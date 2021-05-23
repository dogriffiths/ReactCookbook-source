import {useEffect, useState} from "react";
import {get} from "./faxios";

const usePeopleFast = (...ids) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        let didCancel = false;
        (async () => {
            const result = await Promise.all(
                ids.map(id => get('/people/' + id))
            );
            if (!didCancel) {
                setPeople(result);
            }
        })();
        return () => {didCancel = true;}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...ids]);

    return people;
}

export default usePeopleFast;