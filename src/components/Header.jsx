import { Link } from "react-router-dom"

function Header() {
    const navStyle = {
        display: "flex",
        marginBottom: "0",
        borderBottom: "1px solid #FFFFFF"
    }

    return (
        <header>
            <nav style={navStyle}>
                <Link to='/'>
                    <div className="nav-link">Home</div>
                </Link>
                <Link to='/about'>
                    <div className="nav-link">About</div>
                </Link>
                <Link to='/projects'>
                    <div className="nav-link">Projects</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header
