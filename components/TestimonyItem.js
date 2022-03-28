export default function TestimonyItem({ imgSrc, statement, name }) {
    return (
        <div className="border-t-[12px] m-4 mt-12 bg-[#d9eddf] p-8 pt-0 max-w-md sm:min-w-[330px] border-[#42ec9a] rounded-lg">
            <img width={70} height={70} className="translate-y-[-3em] max-h-[70px] rounded-full" src={imgSrc} />
            <h3 className="font-semibold text-lg text-[#2d3748]">{name}</h3>
            <p className="text-[#718096] font-medium pt-2">{statement}</p>
        </div>
    )
}
