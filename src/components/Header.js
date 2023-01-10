import { Link } from "react-router-dom"

function Header (props) {
    return (
        <div className="nav">
            <Link to="/">iStock App</Link>
            <Link to="/about">About</Link>
            <Link to="/stocks">Stocks</Link>
        </div>
    )
}

export default Header