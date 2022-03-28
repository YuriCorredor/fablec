import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

const divVariants = {
    hidden: {
        opacity: 0,
        y: 200
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.1
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

export default function TestimonyItem({ imgSrc, statement, name }) {

    const { ref, inView } = useInView()
    const controls = useAnimation()
    const [alreadySeen, setAlreadySeen] = useState(false)

    useEffect(() => {
        if (inView) {
            controls.start("visible")
            setAlreadySeen(true)
        }
        if (!inView && !alreadySeen) {
            controls.start("hidden")
        }
    }, [inView, controls])

    return (
        <motion.div
            ref={ref}
            variants={divVariants}
            animate={controls}
            whileHover="hover"
            className="border-t-[12px] cursor-pointer m-4 mt-12 bg-[#d9eddf] p-8 pt-0 max-w-md sm:min-w-[330px] border-[#42ec9a] rounded-lg"
        >
            <img width={70} height={70} className="translate-y-[-3em] max-h-[70px] rounded-full" src={imgSrc} />
            <h3 className="font-semibold text-lg text-[#2d3748]">{name}</h3>
            <p className="text-[#718096] font-medium pt-2">{statement}</p>
        </motion.div>
    )
}
