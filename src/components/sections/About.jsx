import { skillsWork, skillsFun } from "../../utils";
import StackSkills from "../ui/StackSkills";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { TbBrandFunimation } from "react-icons/tb";
import SectionHeader from "../ui/SectionHeader";

const About = () => {
    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8" id="about">
            <SectionHeader title={"About."} subtitle={"Skills & Journey"} />

            <div className="text-secondary-text md:flex flex-row gap-16 px-4 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: 1, y: 0, transition: { duration: 0.8 }
                    }}
                    className="flex-1 text-base">
                    <p className="pb-3">
                        Hey there! I'm John Clayton, a Christian software developer based in Haiti. I specialize in backend development, particularly using Node.js, but I'm also comfortable with various tools and adapt to project needs. I also have experience in frontend development.
                    </p>

                    <p className="pb-3">
                        Currently, I work passively for <a
                            href="https://transitiondigitale.tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:underline">Transition Digitale
                        </a> and contribute to the <span className="text-secondary">Predika</span> project at

                        <a
                            href="https://zoomerdigital.tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:underline"> Zoomer Digital</a>.
                    </p>

                    <p className="pb-3">
                        Outside of the world of code, I'm the guy who enjoys playing football and piano. Every Sunday morning, you'll find me at <a
                            href="https://www.calvarypap.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:underline"
                        >Calvary Chapel Port-au-Prince
                        </a> expressing gratitude for everything God has done and will do.
                    </p>

                    <p className="pb-3">
                        I'm looking for new opportunities where I can merge my love for code with my love for learning to solve challenging problems. If you have an opening that you think might be a good fit, let's connect and explore the possibilities!
                    </p>
                </motion.div>

                <div className="flex-1 pt-4 md:pt-0">
                    <StackSkills
                        title={"Use at work"}
                        list={skillsWork}
                        icon={<FaCode color="#6366f1" />} />

                    <StackSkills
                        title={"Use for fun"}
                        list={skillsFun}
                        icon={< TbBrandFunimation color="#6366f1" />} />
                </div>
            </div>
        </section>
    )
}

export default About