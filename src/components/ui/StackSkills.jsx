import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const StackSkills = ({ title, icon, list }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const staggerVariants = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    }

    return (
        <div className="pb-10" ref={ref}>
            <h4
                className="text-xl font-bold pb-3 text-primary-text flex gap-3 items-center">
                {icon} {title}
            </h4>

            <motion.div
                variants={container}
                initial="hidden"
                animate={control}
                className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {list.map((item, idx) =>
                    <motion.div
                        variants={staggerVariants}
                        animate={control}
                        key={idx}
                        className="py-1 text-base bg-third rounded-full text-secondary-text text-center"
                    >
                        {item}
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default StackSkills