import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import './index.css'
import { langContext } from "../../helper/context.js"

const Home = () =>{
    const {t} = useTranslation()
    const {lang} = useContext(langContext)
    return(
        <div className= {lang ? "home-container-ar": "home-container" }>
            <div className="video-container">
                <iframe className="video"   src="https://www.youtube.com/embed/C6EZh4OlOH4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            </div>
            <div className="description-container">
                <p className={lang?"description-ar":"description"}>
                    {t("home-text")}
                </p>
                <button className={lang? "main-btn-ar":"main-btn"}>{t("contact")}</button>
            </div>
        </div>
    )
}

export default Home

