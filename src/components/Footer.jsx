export default function Footer() {
    const footerStyle = {
        display: "flex",
        borderTop: "1px solid #FFFFFF"
    }

    return (
        <footer style={footerStyle}>
            <a href="https://github.com/jordbort" target="_blank" rel="noopener noreferrer">
                <div className="nav-link">GitHub</div>
            </a>
            <a href="https://www.linkedin.com/in/jordan-bortner/" target="_blank" rel="noopener noreferrer">
                <div className="nav-link">LinkedIn</div>
            </a>
        </footer>
    )
}