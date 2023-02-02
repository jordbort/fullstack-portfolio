import ContactForm from "../components/ContactForm";
import Projects from "./Projects";

export default function Home() {
    return (
        <main>
            <p>▓▒░▒▓▒░▒▓▒░▒▓</p>
            <h1>Welcome to Jordan Bortner's fullstack development portfolio</h1>
            <p>Check out my projects below, or check out the About and Contact pages for more information!</p>
            <p>░▒▓▒░▒▓▒░▒▓▒░</p>
            {/* <p>Check out the About and Projects pages for more information about me and my projects, or use the contact form below to send me an email.</p> */}
            {/* <ContactForm /> */}
            <Projects />
        </main>
    )
}