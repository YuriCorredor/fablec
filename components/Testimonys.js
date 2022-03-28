import { AiFillStar } from "react-icons/ai"
import TestimonyItem from "./TestimonyItem"

const testimonysContents = [
    {
        name: "Laíza A.",
        statement: "Atendimento diferenciado o deles, sempre tirando as minhas dúvidas e respondendo rapidinho. Muito profissionalismo na hora de instalar os equipamentos que comprei. Com certeza recomendarei a todos!",
        imgSrc: "testimony1.jpg"
    },
    {
        name: "Verônica C.",
        statement: "Comprar nunca foi tão fácil; recebi o material rapidamente na escola. Confiança nos clientes, me deixou que pagasse depois de receber a verba.",
        imgSrc: "testimony2.jpg"
    },
    {
        name: "Caroline P.",
        statement: "Facilitou muito a minha vida na hora de comprar. Atendimento muito bom! Gostaria de parabenizar a empresa pela agilidade, competência e comprometimento com os interesses dos clientes.",
        imgSrc: "testimony3.png"
    },
    {
        name: "Rodrigo H.",
        statement: "Simplesmente fantástico. Praticamente se acha de tudo com eles. Entrega rápida com opções dos dias para entregar. Parabéns e que continue assim.",
        imgSrc: "testimony4.png"
    }
]

export default function Testimonys() {

    const array5 = Array(5).fill()

    return (
        <div className="flex w-full flex-col justify-center mt-20">
            <div className="flex flex-col">
                <div className="flex flex-row justify-center pb-4">
                    {array5.map((_, index) => <AiFillStar key={index} size={35} color="#ffba00"/>)}
                </div>
                <h1 className="text-[#2d3748] text-3xl font-semibold pt-0 p-4 text-center"><span className="text-[#42ec9a]">Clientes satisfeitos</span> com os nossos serviços!</h1>
                <p className="text-[#718096] text-lg font-medium p-4 pt-0 text-center">Aqui o que os clientes que adoram os nossos serviços e ofertas dizem sobre nós. Saiba mais!</p>
            </div>
            <div className="relative flex flex-wrap w-full mt-8 mb-12 justify-center flex-row">
                {testimonysContents.map((testimony, index) => <TestimonyItem key={index} name={testimony.name} statement={testimony.statement} imgSrc={testimony.imgSrc} />)}
            </div>
        </div>
    )
}
