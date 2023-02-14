import { useEffect, useState } from "react"

export default function About() {
    const [about, setAbout] = useState(null)

    async function getAboutData() {
        const response = await fetch("./about.json")
        const data = await response.json()
        setAbout(data)
    }

    useEffect(() => {
        getAboutData()
        return setAbout(null)
    }, [])

    function loaded() {
        return (
            <main>
                <img src="jordan-bortner.png" className="about-photo" alt="Jordan Bortner" />
                <h5>&#10216;&#10216;</h5>
                <h3>Name: {about.name}</h3>
                <h5>Location: {about.location}</h5>
                <h5 className="bio">Bio: {about.bio}</h5>
                <h5><a href={about.resume} target="_blank" rel="noopener noreferrer">Check out my resume here!</a></h5>
                <h5>&#10217;&#10217;</h5>
            </main>
        )
    }

    return about ? loaded() : <h1>Loading...</h1>
}