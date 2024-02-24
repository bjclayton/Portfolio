import BumbyTextAnim from "../text anim/BumbyTextAnim";
import { aboutMeText, techList } from "../../utils";
import StackSkills from "../StackSkills";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8">
            <div className="text-primary-text text-center pb-10">
                <BumbyTextAnim text={"About Me."} className="text-4xl font-bold" />
                <p className="text-secondary-text">Skills & Journey</p>
            </div>

            <div className="text-secondary-text md:flex flex-row gap-16 px-4 md:px-0">
                <div className="flex-1 text-xl">
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

                <div className="flex-1">
                    <StackSkills title={"Use at work"} list={techList} />
                    <StackSkills title={"Use for fun"} list={techList} />
                </div>
            </div>
        </section>
    )
}

export default About