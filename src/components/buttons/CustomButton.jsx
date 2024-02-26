"use client";
import { motion } from "framer-motion";

export const CustomButton = ({ label, onClick, svg }) => {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.7,
            },
        },
    };

    return (
        <motion.button
            variants={variants}
            initial="hidden"
            animate="visible"
            onClick={onClick}
            className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-base uppercase text-white font-medium bg-secondary hover:bg-[#6b90bd] active:bg-bg-[#6b90bd] duration-150 rounded-lg sm:mt-0 sm:w-auto transition-all">
            {label}
            {svg}
        </motion.button>
    );
};
