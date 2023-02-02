import { Link } from "react-router-dom"

export default function Header() {
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
                <Link to='/contact'>
                    <div className="nav-link">Contact</div>
                </Link>
            </nav>
        </header>
    )
}