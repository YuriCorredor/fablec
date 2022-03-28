import { AiFillStar } from "react-icons/ai"

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
            <div>
                
            </div>
        </div>
    )
}
