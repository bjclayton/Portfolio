"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3DCard";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-third relative group/card  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-primary-text"
                >
                    {project.title}
                </CardItem>

                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-secondary-text text-xl max-w-sm mt-2"
                >
                    {project.description}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={project.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>

                <div className="flex justify-between items-center mt-20">
                    {project.linkOnline &&
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl text-xl text-secondary-text"
                        >
                            <Link to={project.linkOnline}>Demo →</Link>
                        </CardItem>
                    }

                    {project.linkGithub &&
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-primary text-white text-xl font-bold"
                        >
                            <Link to={project.linkGithub}><FaGithub /></Link>
                        </CardItem>
                    }

                </div>
            </CardBody>
        </CardContainer>
    )
}

export default ProjectCard