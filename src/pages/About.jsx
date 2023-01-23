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
        return (() => setAbout(null))
    }, [])

    function loaded() {
        return (
            <main>
                <img src="jordan-bortner.png" className="about-photo" alt="Jordan Bortner" />
                <p>&#10216;&#10216;</p>
                <h3>Name: {about.name}</h3>
                <p>Location: {about.location}</p>
                <p className="bio">Bio: {about.bio}</p>
                <p>&#10217;&#10217;</p>
            </main>
        )
    }

    return about ? loaded() : <h1>Loading...</h1>
}