import { useEffect, useState } from "react"

export default function Projects() {
    const [projects, setProjects] = useState(null)

    async function getProjectsData() {
        const response = await fetch("./projects.json")
        const data = await response.json()
        setProjects(data)
    }

    useEffect(() => {
        getProjectsData()
        return (() => setProjects(null))
    }, [])

    function loaded() {
        return (
            <>
                {projects.map((project, idx) => (
                    <section key={idx}>
                        {project.name && <h3>{project.name}</h3>}
                        {project.description && <p>{project.description}</p>}
                        {project.technologies && <div className="technologies-used-icons">
                            {project.technologies.map((technology, idx) => <img src={technology} key={idx} alt="" />)}
                        </div>}
                        {project.mockup && <img src={project.mockup} alt={`Screenshot from ${project.name}`} />}
                        {(project.gitFrontEnd || project.gitBackEnd || project.live) && <div className="buttons-container">
                            {project.gitFrontEnd && <a href={project.gitFrontEnd} target="_blank" rel="noreferrer"><button>Frontend repo<span className="desktop-only"> on GitHub</span></button></a>}
                            {project.gitBackEnd && <a href={project.gitBackEnd} target="_blank" rel="noreferrer"><button>Backend repo<span className="desktop-only"> on GitHub</span></button></a>}
                            {project.live && <a href={project.live} target="_blank" rel="noreferrer"><button>Deployed site</button></a>}
                        </div>}
                    </section>
                ))}
            </>
        )
    }

    return projects ? loaded() : <h1>Loading...</h1>
}