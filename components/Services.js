import ServiceItem from "./ServiceItem"
import { FiPackage } from "react-icons/fi"
import { BiConversation } from "react-icons/bi"
import { MdOutlineSchool } from "react-icons/md"
import { IoConstructOutline, IoPersonOutline } from "react-icons/io5"
import { BsPinMap } from "react-icons/bs"

const items = [
    {
        Icon: FiPackage,
        title: 'Sem pedido mínimo',
        description: 'Compre produtos no atacado sem quantidade ou pedido mínimo.'
    },
    {
        Icon: BiConversation,
        title: 'Transparência',
        description: 'Um bom negócio não precisa ir na direção oposta ao que você acredita. Aqui possuímos responsabilidade com os seus valores.'
    },
    {
        Icon: MdOutlineSchool,
        title: 'Materiais Educacionais',
        description: 'Material de escritório, informática, impressoras e cartuchos, material escolar e muito mais. Os melhores produtos para a sua escola/creche com ofertas imperdíveis estão aqui, na Fablec.'
    },
    {
        Icon: IoConstructOutline,
        title: 'Construção, Reforma e Instalação',
        description: 'Nós executamos reformas desde pequenas intervenções a grandes reformas. Adequação de ambientes para as normas de acessibilidade das escolas.'
    },
    {
        Icon: BsPinMap,
        title: 'Tudo em um único lugar',
        description: 'Oferecemos tudo o que precisa em um único lugar, sem complicação e com toda comodidade e conveniência para você.'
    },
    {
        Icon: IoPersonOutline,
        title: 'Foco nas necessidades dos clientes',
        description: 'Nos adaptamos para cumprir com quaisquer necessidades que você tiver.'
    }
]

export default function Services() {
    return (
        <div id='services' className="flex flex-col mx-2 mb-24 items-center justify-center overflow-hidden">
            <h1 className="text-[#2d3748] text-3xl font-semibold text-center p-4 sm:pb-8 pt-0">Vantagens de nossos serviços</h1>
            <div className="grid max-w-6xl sm:grid-cols-2 lg:grid-cols-3 p-8 gap-8 w-screen justify-items-center">
                {items.map((i, index) => <ServiceItem key={index} Icon={i.Icon} title={i.title} description={i.description} />)}
            </div>
        </div>
    )
}
