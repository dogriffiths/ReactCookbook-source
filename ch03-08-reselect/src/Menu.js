import {NavLink} from "react-router-dom";

export default () => {
    return <div className='Menu'>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/boots'>Boots</NavLink></li>
        </ul>
    </div>;
};
