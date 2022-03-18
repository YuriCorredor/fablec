export default function Home() {

    const overlay = {
        background: `linear-gradient(241.14deg,transparent 57.22%,rgba(0,0,0,.25) 78.78%,rgba(0,0,0,.75) 100.61%)`
    }

    return (
        <>
        <div style={overlay} className='z-0 absolute h-full w-full hidden sm:block' />
        <div className="w-full flex flex-col justify-center items-center text-center h-[500px] sm:h-screen bg-[url('/bg.jpg')] bg-contain">
            <h1 className="text-gray-200 p-4 bg-opacity-80 bg-black font-bold rounded-md text-3xl sm:text-5xl">A parceira de mais de 50 Escolas brasileiras</h1>
            <p className="text-gray-200 p-4 bg-opacity-80 bg-black font-normal rounded-md text-base sm:text-xl">Trabalhamos com todos os equipamentos necessários para a sua escola ou creche.</p>
            <button className="z-10 text-[#20252a] p-4 px-8 sm:px-20 m-2 mt-8 bg-[#42ec9a] hover:bg-[#0fcc7d] font-bold rounded-full text-base sm:text-xl">Contate-nos</button>
        </div>
        </>
    )
}
