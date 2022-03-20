import { useState, useRef, useEffect } from "react"
import Link from "next/link";

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const [prevScroll, setPrevScroll] = useState(0);
    const myMenu = useRef(null)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScroll])

    const handleScroll = () => {
        const currentScroll = window.scrollY
        const navbar = document.getElementById('navbar')
        if (prevScroll > currentScroll) {
            navbar.style.top = '0'
        } else {
            myMenu.current.classList.remove('menuopen')
            setMenuOpen(false)
            navbar.style.top = '-74px'
        }
        setPrevScroll(currentScroll)
    }

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
        <nav id='navbar' className="z-10 flex justify-between w-full bg-white top-0 left-0 fixed sm:justify-around items-center border-b-[1px] border-[#bcc8d6] transition-all duration-500">
            <div className="z-10 mx-5 inline-block max-w-[120px] sm-max-w-[150px]">
                <Link href='/'>
                    <img className="cursor-pointer max-w-full h-auto" src="https://i.ibb.co/BNqyTF1/logo.png"/>
                </Link>
            </div>
            <div ref={myMenu} onClick={handleClickMenu} className="py-4 mx-5 z-10 sm:hidden cursor-pointer">
                <div className="myBurguer"></div>
            </div>
            <ul className={`${menuOpen ? 'top-[70px] opacity-100' : 'top-[-260px] opacity-0'}
                absolute w-full transition-all duration-500 text-center justify-center bg-white p-8
                sm:relative sm:text-left sm:top-[0] sm:flex sm:opacity-100 sm:space-x-6 sm:p-0 sm:w-fit sm:mx-5
            `}>
                <li className="p-2 sm:p-0 md:p-2 text-[#446c44] font-bold hover:text-[#2a582a] cursor-pointer" >Início</li>
                <li className="p-2 sm:p-0 md:p-2 text-[#446c44] font-bold hover:text-[#2a582a] cursor-pointer" >Serviços</li>
                <li className="p-2 sm:p-0 md:p-2 text-[#446c44] font-bold hover:text-[#2a582a] cursor-pointer" >Sobre Nós</li>
                <li className="p-2 sm:p-0 md:p-2 text-[#446c44] font-bold hover:text-[#2a582a] cursor-pointer" >Faça o seu orçamento</li>
            </ul>
        </nav>
    )
}