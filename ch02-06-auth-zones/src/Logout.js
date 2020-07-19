import useSecurity from "./useSecurity";
import React from "react";

export default () => {
    const {logout} = useSecurity();

    return <button onClick={logout}>Logout</button>;
}