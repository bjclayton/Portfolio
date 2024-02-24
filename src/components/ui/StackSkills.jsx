import { motion } from "framer-motion";

const StackSkills = ({ title, icon, list }) => {
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
        <div className="pb-10">
            <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
                className="text-2xl font-bold pb-3 text-primary-text flex gap-3 items-center">
                {icon} {title}
            </motion.h4>

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {list.map((item, idx) =>
                    <motion.div
                        variants={staggerVariants}
                        key={idx}
                        className="py-1 text-xl bg-third rounded-full text-primary-text
                        text-center"
                    >
                        {item}
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default StackSkills