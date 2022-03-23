import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Button from './Button'


const outerDivVariants = {
    hidden: {
        y: 300,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.01,
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    }
}

const imgVariants = {
    hidden: {
        x: -150,
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

const innerDivVariants = {
    hidden: {
        x: 150,
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

export default function AboutUs() {

    const [alreadySeen, setAlreadySeen] = useState(false)
    const { ref, inView } = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
            setAlreadySeen(true)
        }
        if (!inView && !alreadySeen) {
            controls.start("hidden")
        }
        console.log(inView)
    }, [controls, inView])

    return (
        <div id='about' className="bg-[#0fcc7d] mt-8 p-5 pb-0 overflow-hidden" >
            <motion.div 
                className="flex flex-col items-center justify-center md:items-start md:flex-row"
                ref={ref}
                variants={outerDivVariants} 
                animate={controls}
            >
                <motion.img
                    className="w-auto h-auto"
                    width={300}  
                    src="brain.png" 
                    variants={imgVariants}
                />
                <motion.div variants={innerDivVariants} className="px-1 py-10 md:py-0 md:px-8 max-w-3xl">
                    <h1 className="text-[#2d3748] text-3xl font-bold">FABLEC</h1>
                    <div className="p-2 text-[#2d3748] text-lg">
                        <h3 >Conheça um pouco sobre a nossa estrutura.</h3>
                        <p>Somos uma empresa voltada para a distribuição atacadista. Nosso negócio nasceu com a necessidade de ajudar Escolas/Creches a acharem as melhores ofertas do mercado.</p>
                        <p>Facilitamos todo o processo de compra, tornando tudo muito simples. Te auxiliamos o tempo todo, da compra até a entrega.</p>
                        <p>Nosso trabalho só termina quando <span className="font-bold">VOCÊ</span> estiver satisfeito.</p>
                        <div className='flex mt-8 items-center justify-center text-center'>
                            <Button bgColor='#e5f1e2' bgColorHover='#d6d6d6' title='Quero receber ofertas' />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
