import React from "react";
import { motion } from "framer-motion";

const AnimatedSubtitle = ({ text, className }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
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
    };

    return (
        <motion.h4
            style={{ overflow: "hidden", display: "flex", }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {
                        letter === " " ? "\u00A0" :
                            (
                                index >= 6 ? <span className="text-secondary">{letter}</span> : letter
                            )
                    }
                </motion.span>
            ))}
        </motion.h4>
    );
};

export default AnimatedSubtitle;