import NavBar from "../components/NavBar"
import Home from "../components/Home"
import Services from "../components/Services"
import Head from "next/head"
import AboutUs from "../components/AboutUs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function index() {
    return (
        <>
            <Head>
                <title>FABLEC DISTRIBUIDORA</title>
            </Head>
            <NavBar />
            <Home />
            <Services />
            <AboutUs />
            <Contact />
            <Footer />
        </>
    )
}
