import {Profiler} from "react";
import usePeopleSlow from "./usePeopleSlow";
import usePeopleFast from "./usePeopleFast";

const ShowDetails = ({onRender}) => {
    const peopleSlow = usePeopleSlow(1, 2, 3, 4);
    const peopleFast = usePeopleFast(1, 2, 3, 4);

    return <Profiler id='profile1' onRender={onRender || (() => {})}>
        <div>
            People slow length: {peopleSlow.length};
            People fast length: {peopleFast.length};
        </div>
    </Profiler>
}

export default ShowDetails;