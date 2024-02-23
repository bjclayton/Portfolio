import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../utils";

const Projects = () => {
    return (
        <section className="mt-5">
            <div className="text-primary-text text-center">
                <h4 className="text-4xl font-bold">
                    Portfolio
                </h4>
                <p className="text-secondary-text">Most recent works</p>
            </div>

            <div className="grid grid-cols-2 mt-28">
                {projects.map((project, idx) => (
                    <ProjectCard project={project} key={idx}/>
                ))}
            </div>
        </section>
    )
}

export default Projects