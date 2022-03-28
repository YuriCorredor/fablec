export default function Input({ condition, id, name, type, autoComplete="on", placeholder, errorMessage, value, onBlur, onChange }) {
    return (
        <>
            <p className={`text-sm text-[#2d3748] ${condition ? 'text-red-600' : ''} p-2 pb-1 pl-0 place-self-start`}>{name}</p>
            <input
                className={`outline-none w-full p-2 mt-0 m-2 border-2 rounded-md focus:shadow-lg ${condition ? 'border-red-600 mb-0' : 'focus:border-[#0fcc7d]'}`}
                id={id}
                type={type}
                autoComplete={autoComplete}
                placeholder={placeholder}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
            />
            {condition ? <p className="text-red-600 text-xs font-thin mb-2 place-self-start">{errorMessage}</p> : null}
        </>
    )
}
