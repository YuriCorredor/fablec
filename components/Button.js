import { motion } from "framer-motion"

export default function Button({ title, bgColor='#42ec9a', bgColorHover='#0fcc7d' }) {

    const buttonVariants = {
        hover: {
            backgroundColor: bgColorHover,
            scale: 1.1,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <motion.a
            variants={buttonVariants}
            whileHover='hover'
            href="#contact"
            style={{
                backgroundColor: bgColor,
                ":hover": {
                    backgroundColor: bgColorHover
                }
            }}
            className={`text-[#2d3748] scale-100 p-4 px-12 sm:px-18 hover:shadow-2xl font-bold rounded-full text-base sm:text-xl`}
        >
            {title}
        </motion.a>
    )
}