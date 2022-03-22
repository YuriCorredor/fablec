export default function ServiceItem({ imgSrc, title, description }) {
    return (
        <div className="flex  flex-col justify-center items-center">
            <img width={120} src={imgSrc} />
            <h1 className="text-[#2d3748] text-xl font-semibold p-4 pt-0">{title}</h1>
            <p>{description}</p>
        </div>
    )
}
