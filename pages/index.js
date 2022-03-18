import NavBar from "../components/NavBar"
import Home from "../components/Home"

export default function index() {
    return (
        <>
            <NavBar />
            <Home />
            <div className="w-full h-[5000px]"></div>
        </>
    )
}
