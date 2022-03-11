import { useState, useRef } from "react"

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const myMenu = useRef(null)

    const handleClickMenu = () => {
        if(!menuOpen) {
            myMenu.current.classList.add('menuopen')
            setMenuOpen(true)
        } else {
            myMenu.current.classList.remove('menuopen')
            setMenuOpen(false)
        }
    }

    return (
        <nav className="flex justify-between sm:justify-around items-center">
            <img width="150" className="ml-5 w-max-full z-10" src="https://i.ibb.co/BNqyTF1/logo.png"/>
            <div ref={myMenu} onClick={handleClickMenu} className="py-4 mx-5 z-10 sm:hidden">
                <div className="myBurguer"></div>
            </div>
            <ul className={`${menuOpen ? 'top-[90px] opacity-100' : 'top-[-260px] opacity-0'}
                absolute w-full transition-all duration-500 text-center justify-center bg-white p-8
                sm:relative sm:text-left sm:top-[0] sm:flex sm:opacity-100 sm:space-x-6 sm:p-0 sm:w-fit sm:mx-5
            `}>
                <li>Início</li>
                <li>Serviços</li>
                <li>Sobre Nós</li>
                <li>Faça o seu orçamento</li>
            </ul>
        </nav>
    )
}