import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from './Button'

const outerDivVariants = {
    hidden: {
        x: -1000, 
        opacity: 0
    },
    visible: {
        x: 0, 
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

const imageVariants = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
}

export default function Home() {

    const controls = useAnimation()
    const { ref, inView } = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])

    return (
        <motion.div
            id="home"
            className="pt-28 pb-12 sm:pb-40 flex flex-col justify-center items-center md:items-start md:flex-row"
            variants={outerDivVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex max-w-lg flex-col items-center">
                <p className="pb-8 text-[#0fcc7d] font-thin text-xs">ESCOLAS E CRECHES</p>
                <h1 className="text-[#2d3748] text-5xl font-semibold p-4 pt-0 text-center sm:text-left">A parceira de mais de 50 Escolas e Creches brasileiras</h1>
                <p className="text-[#718096] text-lg font-medium p-4 pb-0 pt-0 text-center sm:text-left">Trabalhamos com todos os equipamentos necessários para a sua Escola ou Creche. Entre em contato e faça o seu orçamento, e receberá ofertas incríveis.</p>
                <div className='lg:mt-24 mt-12 mb-8 md:mb-0'>
                    <Button title='Contate-nos' />
                </div>
            </div>
            <motion.img
                ref={ref}
                className="w-auto h-auto" 
                src='einstein.png'
                variants={imageVariants}
                animate={controls}
            />
        </motion.div>
    )
}