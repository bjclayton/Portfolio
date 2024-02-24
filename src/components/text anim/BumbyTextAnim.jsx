import { motion } from 'framer-motion';

const BumbyTextAnim = ({ text, className }) => {
    const spanVariants = {
        visible: { y: 0, scaleY: 1 },
        hover: {
            y: [-1, -2, -2.8, 0.9, 0],
            scaleY: [1, 1.3, 0.8, 1, 1.2],
            color: "#6366f1",
        }
    };

    return (
        <h4>
            {text.split("").map((letter, idx) =>
                <motion.span
                    key={idx}
                    variants={spanVariants}
                    initial="visible"
                    whileHover="hover"
                    style={{ display: "inline-block" }}
                    className={className}
                >
                    {letter === " " ? "\u00A0" :
                        (
                            letter === "." ? <span className="text-secondary text-6xl">.</span> : letter
                        )}
                </motion.span>
            )}
        </h4>
    );
}

export default BumbyTextAnim;
