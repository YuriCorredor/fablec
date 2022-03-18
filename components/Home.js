export default function Home() {

    const overlay = {
        background: `linear-gradient(241.14deg,transparent 57.22%,rgba(0,0,0,.25) 78.78%,rgba(0,0,0,.75) 100.61%)`
    }

    return (
        <div className="bg-black h-screen">
            <h1 className="">A parceira de mais de 50 Escolas brasileiras</h1>
            <p className="">Trabalhamos com todos os equipamentos necessários para a sua escola ou creche.</p>
            <button className="z-10 text-[#20252a] p-4 px-8 sm:px-20 m-2 mt-8 bg-[#42ec9a] hover:bg-[#0fcc7d] font-bold rounded-full text-base sm:text-xl">Contate-nos</button>
        </div>
    )
}
