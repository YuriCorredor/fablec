import ServiceItem from "./ServiceItem"

const items = [
    {
        imgSrc: 'https://dropify.com.br/assets/img/logos/logo-dropify-blue.png',
        title: 'Sem pedido mínimo',
        description: 'Test1Test1Test1Test1'
    },
    {
        imgSrc: 'https://dropify.com.br/assets/img/logos/logo-dropify-blue.png',
        title: 'Transparência',
        description: 'Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1Test1'
    },
    {
        imgSrc: 'https://dropify.com.br/assets/img/logos/logo-dropify-blue.png',
        title: 'Materiais Educacionais',
        description: 'Test1Test1'
    },
    {
        imgSrc: 'https://dropify.com.br/assets/img/logos/logo-dropify-blue.png',
        title: 'Construção e Reforma',
        description: 'Test1Test1'
    },
    {
        imgSrc: 'https://dropify.com.br/assets/img/logos/logo-dropify-blue.png',
        title: 'Tudo em um único lugar',
        description: 'Test1Test1'
    },
    {
        imgSrc: 'https://dropify.com.br/assets/img/logos/logo-dropify-blue.png',
        title: 'Foco nas necessidades dos clientes',
        description: 'Test1Test1'
    }
]

export default function Services() {
    return (
        <div id='services' className="flex flex-col items-center justify-center overflow-hidden">
            <h1 className="text-[#2d3748] text-3xl font-semibold text-center p-4 pt-0">Vantagens de nossos serviços</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 p-8 gap-8 w-screen">
                {items.map(i => <ServiceItem imgSrc={i.imgSrc} title={i.title} description={i.description} />)}
            </div>
        </div>
    )
}
