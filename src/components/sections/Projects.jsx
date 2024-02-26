import ProjectCard from "../cards/ProjectCard";
import { projects } from "../../utils";
import BumbyTextAnim from "../text anim/BumbyTextAnim";

const Projects = () => {
    return (
        <section className="mt-5" id="projects">
            <div className="text-primary-text text-center pb-1">
                <BumbyTextAnim text={"Projects."} className="text-4xl font-bold" />
                <p className="text-secondary-text">Most recent works</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-0">
                {projects.map((project, idx) => (
                    <ProjectCard project={project} key={idx} />
                ))}
            </div>
        </section>
    )
}

export default Projects