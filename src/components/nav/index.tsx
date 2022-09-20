import React, { useContext, useState } from "react"
import "./index.css"
import "../../i18n/i18n.tsx"
import { useTranslation } from 'react-i18next';
import { langContext } from "../../helper/context.js";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SideMenuData } from "../../helper/sideMenuData";


import { Link } from "react-router-dom"

const Nav = () => {
    const { t, i18n } = useTranslation();
    const { lang, setLang } = useContext(langContext)
    const [sideMenu,setSideMenu] = useState(false)
    const showSideMenu = () =>{
        setSideMenu(!sideMenu)
    }
    return (
        <div className={lang ? "nav-main-ar" : "nav-main"}>
            <div className="logo-container">
                <h2 className="logo-text">Share<span>Advertising</span></h2>
                <img src=".\resources\images\logo-share-2.png" alt="logo" />
            </div>
            <div className="list-container">
                <ul className="headers-list">
                    <Link to="/" >{t("home")}</Link>
                    <Link to="/about">{t("about")}</Link>
                    <Link to="/services">{t("services")}</Link>
                    <Link to="/work">{t("work")}</Link>
                    <Link className="contact" to="/contact">{t("contact")}</Link>
                    <Link to="/" className={lang ? "main-btn-ar" : "main-btn"}>{t("login")}</Link>
                </ul>
            </div>

            <div className="lang-list">

                <img src={lang ? "./resources/images/egypt.png" : "./resources/images/united-kingdom.png"} alt="Lang"
                    onClick={() => {
                        setLang(!lang)
                        lang ? i18n.changeLanguage("en") : i18n.changeLanguage("ar")
                    }}
                    className="lang" />
                <div className="menu">
                    <FaIcons.FaBars onClick={showSideMenu }/>
                </div>
                <nav className={sideMenu?"nav-menu active":"nav-menu"}>
                    <ul className="nav-menu-items"onClick={showSideMenu}>
                        <li className="navbar-toggle" >
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SideMenuData.map((item,i)=>{
                            return(
                                <li key={i} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>

        </div>
    )

}
export default Nav;
