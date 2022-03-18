import { motion } from 'framer-motion'

export default function Home() {
    return (
        <motion.div 
            className="pt-96 sm:pt-28 h-screen flex flex-col justify-center items-center sm:items-start sm:flex-row"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex max-w-lg flex-col items-center">
                <p className="pb-8 text-[#0fcc7d] font-thin text-xs">ESCOLAS E CRECHES</p>
                <h1 className="text-[#2d3748] text-5xl font-semibold p-4 pt-0 text-center sm:text-left">A parceira de mais de 50 Escolas e Creches brasileiras</h1>
                <p className="text-[#718096] text-lg font-medium p-4 pb-0 pt-0 text-center sm:text-left">Trabalhamos com todos os equipamentos necessários para a sua Escola ou Creche. Entre em contato para fazer parte de nossa equipe.</p>
                <button className="text-[#2d3748] p-4 px-12 sm:px-18 m-2 sm:mt-12 md:mt-24 bg-[#42ec9a] hover:bg-[#0fcc7d] font-bold rounded-full text-base sm:text-xl">Contate-nos</button>
            </div>
            <motion.img 
                className="w-auto h-auto" src='einstein.png'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
            />
        </motion.div>
    )
}
