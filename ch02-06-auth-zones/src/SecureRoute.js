import Login from "./Login";
import {Route} from "react-router-dom";
import useSecurity from "./useSecurity";

export default (props) => {
    const {loggedIn} = useSecurity();

    return <Route {...props}>
        {loggedIn ? props.children : <Login/>}
    </Route>;
}
