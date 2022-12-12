import { Link } from "react-router-dom"

function Header(props) {
    // Styling
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto"
    }

    return (
        <header>
            <h1>My portfolio page</h1>
            <nav style={navStyle}>
                <div className="nav-link">
                    <Link to='/'>HOME</Link>
                </div>
                <div className="nav-link">
                    <Link to='/about'>ABOUT</Link>
                </div>
                <div className="nav-link">
                    <Link to='/projects'>PROJECTS</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header