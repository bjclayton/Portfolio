import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalWrapper = ({ children, direction, height }) => {
    const scrollRef = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"],
    });

    const xTransform = useTransform(
        scrollYProgress,
        [0, 0.1, 1],
        [0, 0, direction]
    );

    return (
        <div ref={scrollRef}>
            <motion.div
                style={{
                    height: height,
                    zIndex: 6,
                    position: "relative",
                    translateX: xTransform,
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default HorizontalWrapper