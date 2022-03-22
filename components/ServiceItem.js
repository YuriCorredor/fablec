export default function ServiceItem({ imgSrc, title, description }) {
    return (
        <div className="flex flex-col items-center place-self-center center w-full break-all">
            <img width={120} src={imgSrc} />
            <h1 className="text-[#2d3748] text-xl font-semibold p-4 pt-0 break-normal text-center">{title}</h1>
            <p className="">dasd;lksam;klmsadkisjadsjaasddikjsakipdasaisodjnaskdioasjdasdiasjdas</p>
        </div>
    )
}
