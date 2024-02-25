import BumbyTextAnim from "../text anim/BumbyTextAnim";
import { aboutMeText, techList } from "../../utils";
import StackSkills from "../ui/StackSkills";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { TbBrandFunimation } from "react-icons/tb";

const About = () => {
    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8" id="about">
            <div className="text-primary-text text-center pb-10">
                <BumbyTextAnim text={"About."} className="text-4xl font-bold" />
                <p className="text-secondary-text">Skills & Journey</p>
            </div>

            <div className="text-secondary-text md:flex flex-row gap-16 px-4 md:px-0">
                <div className="flex-1 text-base">
                    {aboutMeText.map((item, idx) =>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: 1, y: 0, transition: { duration: 0.8 }
                            }}
                            key={idx}
                            className="pb-5"
                        >
                            {item}
                        </motion.p>
                    )}
                </div>

                <div className="flex-1 pt-4 md:pt-0">
                    <StackSkills
                        title={"Use at work"}
                        list={techList}
                        icon={<FaCode color="#6366f1" />} />

                    <StackSkills
                        title={"Use for fun"}
                        list={techList}
                        icon={< TbBrandFunimation color="#6366f1" />} />
                </div>
            </div>
        </section>
    )
}

export default About