import Button from './Button'

export default function AboutUs() {
    return (
        <div id='about' className="bg-[#0fcc7d] my-8 p-5 pb-0">
            <div className="flex flex-col items-center justify-center md:items-start md:flex-row">
                <img width={300}  src="brain.png" />
                <div className="px-1 py-10 md:py-0 md:px-8 max-w-3xl">
                    <h1 className="text-[#2d3748] text-3xl font-bold">FABLEC</h1>
                    <div className="p-2 text-[#2d3748] text-lg">
                        <h3 >Conheça um pouco sobre a nossa estrutura.</h3>
                        <p>Somos uma empresa voltada para a distribuição atacadista. Nosso negócio nasceu com a necessidade de ajudar Escolas/Creches a acharem as melhores ofertas no mercado.</p>
                        <p>Facilitamos todo o processo de compra, tornando tudo muito simples. Te auxiliamos o tempo todo, da compra até a entrega.</p>
                        <p>Nosso trabalho só termina quando <span className="font-bold">VOCÊ</span> estiver satisfeito.</p>
                        <div className='flex mt-8 items-center justify-center text-center'>
                            <Button bgColor='#e5f1e2' bgColorHover='#d6d6d6' title='Quero fazer parte' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
