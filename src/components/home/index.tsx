import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import './index.css'
import { langContext } from "../../helper/context.js"
import{Link} from "react-router-dom"

const Home = () =>{
    const {t} = useTranslation()
    const {lang} = useContext(langContext)
    

    return(
        <div className= {lang ? "home-container-ar": "home-container" }>
            <div className="video-container">
                <iframe className="video"   src="https://www.youtube.com/embed/C6EZh4OlOH4" title="YouTube video player" frameBorder={0} allowFullScreen/>
            </div>
            <div className="description-container">
                <p className={lang?"description-ar":"description"}>
                    {t("home-text")}
                </p>
                <Link to="/contact" className={lang? "main-btn-ar":"main-btn"}>{t("contact")}</Link>
            </div>
        </div>
    )
}

export default Home

