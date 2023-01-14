import { useEffect, useState } from "react"

function Projects(props) {
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
                        {project.desktop || project.mobile ? <div className="preview-images-container">
                            {project.desktop ? <div className="desktop-preview">
                                <img src={project.desktop} alt={`Screenshot from ${project.name}`} />
                            </div> : null}
                            {project.mobile ? <div className="mobile-preview">
                                <img src={project.mobile} alt={`Screenshot from ${project.name}`} />
                            </div> : null}
                        </div> : null}
                        {project.gitFrontEnd || project.gitBackEnd || project.live ? <div className="buttons-container">
                            {project.gitFrontEnd ? <a href={project.gitFrontEnd} target="_blank" rel="noreferrer">
                                <button>GitHub Frontend Repo</button>
                            </a> : null}
                            {project.gitBackEnd ? <a href={project.gitBackEnd} target="_blank" rel="noreferrer">
                                <button>GitHub Backend Repo</button>
                            </a> : null}
                            {project.live ? <a href={project.live} target="_blank" rel="noreferrer">
                                <button>Deployed site</button>
                            </a> : null}
                        </div> : null}
                    </section>
                ))}
            </main>
        )
    }

    return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects