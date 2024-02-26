import { motion } from "framer-motion";

const Toast = ({ message }) => {
    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.8 }
        },
    };

    if (!message) {
        return null;
    }

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-secondary-text bg-third divide-x rtl:divide-x-reverse divide-secondary-text rounded-lg shadow space-x mb-5" role="alert">
            <svg className="w-5 h-5 text-secondary rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
            </svg>
            <div className="ps-4 text-base">{message}</div>
        </motion.div>
    )
}

export default Toast