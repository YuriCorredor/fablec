export default function ServiceItem({ Icon, title, description }) {
    return (
        <div className="flex flex-col items-center max-w-[300px] p-2 hover:scale-110 transition-all cursor-pointer">
            <Icon size={38} color='#0fcc7d' className='m-2' />
            <h1 className="text-[#2d3748] text-xl font-semibold max-w-[240px] p-4 py-0 pb-1 text-center">{title}</h1>
            <p className="text-[#718096] text-md p-0 text-center">{description}</p>
        </div>
    )
}
