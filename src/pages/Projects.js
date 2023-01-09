import { useEffect, useState } from "react"

function Projects() {
    const [projects, setProjects] = useState(null)

    const getProjectsData = async () => {
        const response = await fetch("./projects.json")
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => {
        getProjectsData()
    }, [])

    const loaded = () => {
        return (
            <main>
                {projects.map((project, idx) => (
                    <section key={idx}>
                        {project.name ? <h4>{project.name}</h4> : null}
                        {project.description ? <p>{project.description}</p> : null}
                        {project.image ? <img src={project.image} alt={`Screenshot from ${project.name}`} /> : null}
                        <div className="buttons-container">
                            {project.gitFrontEnd ? <a href={project.gitFrontEnd} target="_blank" rel="noreferrer"><button>Frontend Repo<span className="desktop-only"> on GitHub</span></button></a> : null}
                            {project.gitBackEnd ? <a href={project.gitBackEnd} target="_blank" rel="noreferrer"><button>Backend Repo<span className="desktop-only"> on GitHub</span></button></a> : null}
                            {project.live ? <a href={project.live} target="_blank" rel="noreferrer"><button>Deployed site</button></a> : null}
                        </div>
                    </section>
                ))}
            </main>
        )
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects