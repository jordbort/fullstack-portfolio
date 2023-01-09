import { useEffect, useState } from "react"

function About() {
    const [about, setAbout] = useState(null)

    const getAboutData = async () => {
        const response = await fetch("./about.json")
        const data = await response.json()
        setAbout(data)
    }

    useEffect(() => {
        getAboutData()
    }, [])

    const loaded = () => (
        <main>
            <p>&#10216;&#10216;</p>
            <h3>Name: {about.name}</h3>
            <p>Location: {about.location}</p>
            <p>GitHub: <a href={about.github} target="_blank" rel="noopener noreferrer">github.com/jordbort</a></p>
            <p>LinkedIn: <a href={about.linkedin} target="_blank" rel="noopener noreferrer">in/jordan-bortner/</a></p>
            <p>Bio: {about.bio}</p>
            <p>&#10217;&#10217;</p>
        </main>
    )

    return about ? loaded() : <h1>Loading...</h1>
}

export default About