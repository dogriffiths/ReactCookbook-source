import useSecurity from "./useSecurity";

export default () => {
    const {logout} = useSecurity();

    return <button onClick={logout}>Logout</button>;
}
