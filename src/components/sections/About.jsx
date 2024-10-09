import { skillsWork, certificates } from "../../utils";
import StackSkills from "../ui/StackSkills";
import { FaCode } from "react-icons/fa6";
import { TbBrandFunimation } from "react-icons/tb";
import { TbCertificate } from "react-icons/tb";
import SectionHeader from "../ui/SectionHeader";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Tooltip from "../ui/Tooltip";
import transition from "../../assets/images/transition.png";
import zoomer from "../../assets/images/zoomer.png";
import ccpap from "../../assets/images/ccpap.png";

const About = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.8 }
        },
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8" id="about">
            <SectionHeader title={"About."} subtitle={"Skills & Journey"} />

            <div className="text-secondary-text md:flex flex-row gap-16 px-4 md:px-0" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={control}
                    className="flex-1 text-base">
                    <p className="pb-3">
                        Hey there! I'm John Clayton, a software developer based in Florida. I specialize in backend development, particularly using Golang, Node.js, and Python, but I'm also comfortable with various tools and adapt to project needs. I also have experience in frontend development.
                    </p>

{/*                     <div className="pb-3">
                        Currently, I work passively for{' '}
                        <Tooltip
                            name={'Transition Digitale'}
                            path={'https://transitiondigitale.tech/'}
                            image={transition}
                        />{' '}

                        and contribute to the
                        <span className="text-secondary"> Predika </span>
                        project at{' '}

                        <Tooltip
                            name={'Zoomer Digital'}
                            path={'https://zoomerdigital.tech/'}
                            image={zoomer}
                        />
                    </div>

                    <div className="pb-3">
                        Outside of the world of code, I'm the guy who enjoys playing football and piano. Each Sunday morning, you can find me at{' '}
                        <Tooltip
                            name={'Calvary Chapel Port-au-Prince'}
                            path={'https://www.calvarypap.org/'}
                            image={ccpap}
                        />
                        , expressing gratitude to God.
                    </div> */}

                    <div className="pb-3">
                        I'm looking for new opportunities where I can merge my love for code with my love for learning to solve challenging problems. If you have an opening that might be a good fit, let's connect and explore the possibilities!
                    </div>
                </motion.div>

                <div className="flex-1 pt-4 md:pt-0">
                    <StackSkills
                        title={"Programming & Tools"}
                        list={skillsWork}
                        icon={<FaCode color="#6366f1" />} />

                    <StackSkills
                        title={"Certificates"}
                        list={certificates}
                        icon={< TbCertificate color="#6366f1" />} />
                </div>
            </div>
        </section>
    )
}

export default About
