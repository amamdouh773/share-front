import React from "react"
import './index.css'
import Home from '../../components/home/index.tsx';
import About from '../../components/about-us/index.tsx';
import Work from '../../components/our-work/index.tsx';
import Contact from '../../components/contact-us/index.tsx';
import Services from '../../components/services/index.tsx';
import {BsFillTelephoneFill} from "react-icons/bs"

const Main = () => {
    return (
        <div className="main-container" >
            <Home />
            <About />
            <Work />
            <Services />
            <Contact />
            <a href="tel:+201069960013" className="phone"><BsFillTelephoneFill/></a>
        </div>
    )
}

export default Main

