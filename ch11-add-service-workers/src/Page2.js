import {Link} from "react-router-dom";

const Page2 = () => {
    return <div className='Page2'>
        <h1>Page 2</h1>
        <p>
            Welcome to page 2!
        </p>

        <Link to='/'>Return</Link>
    </div>
}

export default Page2;