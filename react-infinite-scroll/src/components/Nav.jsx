import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Window Scroll</Link>
            <Link to="/div">Div scroll</Link>
        </div>
    )
}

export default Navbar