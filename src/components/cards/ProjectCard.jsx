"use client";
import React from "react";
import { PinContainer } from "../ui/PinContainer";
//,
// linkGithub,
// linkOnline,
// techStack
const ProjectCard = ({ project }) => {
    return (
        <PinContainer
            title={project.title}
            href={project.linkOnline}
        >
            <div className="flex flex-col gap-3 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem]">

                <img
                    className="w-full h-full rounded-lg mt-1"
                    src={project.image}
                    alt="Project Image" />

                <h3 className="max-w-xs font-bold text-xl text-primary-text">
                    {project.title}
                </h3>

                <div className="text-base font-normal">
                    <span className="text-secondary-text">
                        {project.description}
                    </span>
                </div>
            </div>
        </PinContainer>
    )
}

export default ProjectCard