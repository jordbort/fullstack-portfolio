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
        return (
            <main>
                {projects.map((project, idx) => (
                    <section key={idx}>
                        {project.name ? <h4>{project.name}</h4> : null}
                        {project.image ? <img src={project.image} alt={`Screenshot from ${project.name}`} /> : null}
                        <div className="buttons-container">
                            {project.gitFrontEnd ? <a href={project.gitFrontEnd} target="_blank" rel="noreferrer">
                                <button>GitHub Frontend Repo</button>
                            </a> : null}
                            {project.gitBackEnd ? <a href={project.gitBackEnd} target="_blank" rel="noreferrer">
                                <button>GitHub Backend Repo</button>
                            </a> : null}
                            {project.live ? <a href={project.live} target="_blank" rel="noreferrer">
                                <button>Deployed site</button>
                            </a> : null}
                        </div>
                    </section>
                ))}
            </main>
        )
    }

    // If data arrives, return the result, otherwise a loading screen
    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects