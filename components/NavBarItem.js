export default function NavBarItem({ title, href }) {
    return (
        <li className="p-2 sm:p-0 md:p-2 text-[#446c44] font-bold hover:text-[#2a582a] cursor-pointer" >
            <a href={href}>{title}</a>
        </li>
    )
}
