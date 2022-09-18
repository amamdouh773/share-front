import React from "react"
import './index.css'
import Home from '../home/index.tsx';
import About from '../about-us/index.tsx';
import Work from '../our-work/index.tsx';
import Contact from '../contact-us/index.tsx';
import Services from '../services/index.tsx';

const Main = () => {
    return (
        <div className="main-container" >
            <Home />
            <About />
            <Work />
            <Services />
            <Contact />
        </div>
    )
}

export default Main

