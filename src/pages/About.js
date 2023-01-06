import { useEffect, useState } from "react"

function About(props) {
    // Create state to hold "About" data
    const [about, setAbout] = useState(null)

    // Create function to make API call
    const getAboutData = async () => {

        // Make API call and wait for the response
        const response = await fetch("./about.json")

        // Turn response into JavaScript object
        const data = await response.json()

        // Set the About state to the data
        setAbout(data)
    }

    // Make an initial call for the data inside a useEffect, so it only happens once, on component load
    useEffect(() => {
        getAboutData()
    }, [])

    // Define a function that will return the JSX needed once we get the data
    const loaded = () => (
        <div>
            <h2>Name: {about.name}</h2>
            <h4>Location: {about.location}</h4>
            <h4>GitHub: <a href={about.github} target="_blank" rel="noopener noreferrer">{about.github}</a></h4>
            <h4>LinkedIn: <a href={about.linkedin} target="_blank" rel="noopener noreferrer">{about.linkedin}</a></h4>
            <p>Bio: {about.bio}</p>
        </div>
    )

    // If data arrives, return the result, otherwise a loading screen
    return about ? loaded() : <h1>Loading...</h1>
}

export default About