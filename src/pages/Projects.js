import { useEffect, useState } from "react"

function Projects(props) {
    // Create state to hold "Projects" data
    const [projects, setProjects] = useState(null)

    // Create function to make API call
    const getProjectsData = async () => {

        // Make API call and wait for the response
        const response = await fetch("./projects.json")

        // Turn response into JavaScript object
        const data = await response.json()

        // Set the About state to the data
        setProjects(data)
    }

    // Make an initial call for the data inside a useEffect, so it only happens once, on component load
    useEffect(() => {
        getProjectsData()
    }, [])

    // Define a function that will return the JSX needed once we get the data
    const loaded = () => {
        return projects.map((project, idx) => (
        <div key={idx}>
            <h1>{project.name}</h1>
            <img src={project.image} width="25%" alt={`Screenshot from ${project.name}`} />
            <br />
            <a href={project.git} target="_blank" rel="noreferrer">
                <button>View on GitHub</button>
            </a>
            <a href={project.live} target="_blank" rel="noreferrer">
                <button>Deployed site</button>
            </a>
        </div>
        ))
    }

    // If data arrives, return the result, otherwise a loading screen
    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects