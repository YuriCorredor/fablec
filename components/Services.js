import ServiceItem from "./ServiceItem"

const items = [
    {
        imgSrc: 'https://dropify.com.br/assets/img/logos/logo-dropify-blue.png',
        title: 'Test1',
        description: 'Test1Test1Test1Test1'
    },
    {
        imgSrc: 'https://dropify.com.br/assets/img/logos/logo-dropify-blue.png',
        title: 'Test2',
        description: 'Test1Test1Test1Test1Test1Test1Test1Test1'
    },
    {
        imgSrc: 'https://dropify.com.br/assets/img/logos/logo-dropify-blue.png',
        title: 'Test3',
        description: 'Test1Test1'
    }
]

export default function Services() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[#2d3748] text-3xl font-semibold p-4 pt-0">Vantagens de nossos serviços</h1>
            <div className="flex flex-wrap space-x-8 m-12">
                {items.map(i => <ServiceItem imgSrc={i.imgSrc} title={i.title} description={i.description} />)}
            </div>
        </div>
    )
}
