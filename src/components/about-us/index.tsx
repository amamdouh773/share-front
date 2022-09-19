import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import "./index.css"
import { langContext } from "../../helper/context.js";

const About = () => {
    const { t } = useTranslation()
    const { lang } = useContext(langContext)
    return (
        <div className="about-container">
            <div className="circle"><h3 className={lang ? "container-header-ar" : "container-header"}>{t("about")}</h3>
            </div>
            <iframe className="video" src="https://www.youtube.com/embed/AM5n1E68WrI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
    )
}

export default About