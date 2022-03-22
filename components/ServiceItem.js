import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const outerDivVariants = {
    hidden: {
        y: 100, 
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8
        }
    },
    hover: {
        scale: 1.1,
        transition: { 
            type: 'spring',
            stiffness: 300
        }
    }
}

export default function ServiceItem({ Icon, title, description }) {

    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
        if (!inView) {
            controls.start("hidden")
        }
    }, [controls, inView])
    

    return (
        <motion.div
            ref={ref}
            variants={outerDivVariants}
            whileHover="hover"
            animate={controls}
            className="flex flex-col items-center max-w-[300px] p-2 cursor-pointer"
        >
            <Icon size={38} color='#0fcc7d' className='m-2' />
            <h1 className="text-[#2d3748] text-xl font-semibold max-w-[240px] p-4 py-0 pb-1 text-center">{title}</h1>
            <p className="text-[#718096] text-md p-0 text-center">{description}</p>
        </motion.div>
    )
}
