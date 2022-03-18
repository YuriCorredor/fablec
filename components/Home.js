export default function Home() {

    const overlay = {
        background: `linear-gradient(241.14deg,transparent 57.22%,rgba(0,0,0,.25) 78.78%,rgba(0,0,0,.75) 100.61%)`
    }

    return (
        <div className="pt-80 sm:pt-32 h-screen flex flex-col justify-center items-center sm:items-start sm:flex-row">
            <div className="flex max-w-lg flex-col items-center">
                <p className="pb-8 text-[#0fcc7d] font-thin text-xs">ESCOLAS E CRECHES</p>
                <h1 className="text-[#2d3748] text-4xl font-bold p-4 pt-0 text-center sm:text-left">A parceira de mais de 50 Escolas e Creches brasileiras</h1>
                <p className="text-[#718096] text-lg font-medium p-4 pb-0 pt-0 text-center sm:text-left">Trabalhamos com todos os equipamentos necessários para a sua Escola ou Creche. Entre em contato para fazer parte de nossa equipe.</p>
                <button className="text-[#2d3748] p-4 px-12 sm:px-20 m-2 sm:mt-16 md:mt-28 bg-[#42ec9a] hover:bg-[#0fcc7d] font-bold rounded-full text-base sm:text-xl">Contate-nos</button>
            </div>
            <img src='einstein.png' />
        </div>
    )
}
