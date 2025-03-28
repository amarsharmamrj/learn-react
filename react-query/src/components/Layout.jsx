import { Link } from "react-router-dom"

const Layout = (props) => {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/infinite">Infinite</Link>  
            {
                props.children
            }
        </div>
    )
}

export default Layout
