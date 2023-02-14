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
                        {project.name ? <h3>{project.name}</h3> : null}
                        {project.description ? <p>{project.description}</p> : null}
                        {project.technologies ? <div className="technologies-used-icons">
                            {project.technologies.map((technology, idx) => <img src={technology} key={idx} alt="" />)}
                        </div> : null}
                        {project.desktop || project.mobile ? <div className="preview-images-container">
                            {project.desktop ? <div className="desktop-preview">
                                <img src={project.desktop} alt={`Screenshot from ${project.name}`} />
                            </div> : null}
                            {project.mobile ? <div className="mobile-preview">
                                <a href={project.live}><img src={project.mobile} alt={`Screenshot from ${project.name}`} /></a>
                            </div> : null}
                        </div> : null}
                        {project.gitFrontEnd || project.gitBackEnd || project.live ? <div className="buttons-container">
                            {project.gitFrontEnd ? <a href={project.gitFrontEnd} target="_blank" rel="noreferrer">
                                <button>Frontend repo<span className="desktop-only"> on GitHub</span></button>
                            </a> : null}
                            {project.gitBackEnd ? <a href={project.gitBackEnd} target="_blank" rel="noreferrer">
                                <button>Backend repo<span className="desktop-only"> on GitHub</span></button>
                            </a> : null}
                            {project.live ? <a href={project.live} target="_blank" rel="noreferrer">
                                <button>Deployed site</button>
                            </a> : null}
                        </div> : null}
                    </section>
                ))}
            </>
        )
    }

    return projects ? loaded() : <h1>Loading...</h1>
}