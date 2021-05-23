import {lazy, Suspense, useState} from "react";
import "./About.css";

const People = lazy(() => import("./People"));
const Offices = lazy(() => import("./Offices"));

const OldAbout = () => {
    const [tabId, setTabId] = useState("people")

    return <div className='About'>
        <div className='About-tabs'>
            <div onClick={() => setTabId("people")}
                 className={tabId === "people" ? "About-tab active" : "About-tab"}
            >
                People
            </div>
            <div onClick={() => setTabId("offices")}
                 className={tabId === "offices" ? "About-tab active" : "About-tab"}
            >
                Offices
            </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
            {tabId === "people" && <People/>}
            {tabId === "offices" && <Offices/>}
        </Suspense>
    </div>;
}

export default OldAbout;