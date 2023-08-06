import emailjs from "emailjs-com"
import { useRef } from "react"

export default function Contact() {
    const form = useRef()

    function sendEmail(e) {
        e.preventDefault()
        if (e.target[0].value && e.target[1].value && e.target[2].value) {
            emailjs.sendForm('service_eztv7sl', 'template_o824oq1', form.current, 'gUY6GA8agJMwr1GbC')
                .then((result) => {
                    console.log(result.text)
                }, (error) => {
                    console.log(error.text)
                })
            e.target.reset()
        }
    }

    return (
        <main>
            <h4>Email me! &#128071;</h4>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label htmlFor="user_name">Name:</label>
                    <input type="text" name="user_name" placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="user_email">Email:</label>
                    <input type="email" name="user_email" placeholder="Your email address" />
                </div>
                <label htmlFor="message">Send me a nice message:</label>
                <textarea name="message" placeholder="Type your message here" />
                <input type="submit" value="Send email" />
            </form>
            <p>If you prefer, you may also <a href="mailto:jordan.bortner@gmail.com">reach out to me directly.</a></p>
        </main>
    )
}