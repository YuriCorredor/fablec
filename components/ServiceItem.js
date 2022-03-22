import { motion } from "framer-motion"

export default function ServiceItem({ Icon, title, description }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center max-w-[300px] p-2 cursor-pointer"
        >
            <Icon size={38} color='#0fcc7d' className='m-2' />
            <h1 className="text-[#2d3748] text-xl font-semibold max-w-[240px] p-4 py-0 pb-1 text-center">{title}</h1>
            <p className="text-[#718096] text-md p-0 text-center">{description}</p>
        </motion.div>
    )
}
