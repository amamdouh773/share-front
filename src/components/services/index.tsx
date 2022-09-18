import React from "react"
import Card from "../card/index.tsx"
import { langContext } from "../../helper/context"
import './index.css'
import { useContext } from "react"
import { useTranslation } from "react-i18next"

const Services = () => {
    const servicesList = [
        {
            name: "Facebook ads",
            logo: "./resources/images/facebook-ads.png"
        },
        {
            name: "Google ads",
            logo: "./resources/images/google-ads.png"
        }, {
            name: "Snapchat ads",
            logo: "./resources/images/snapchat-ads.png"
        }, {
            name: "Tiktok ads",
            logo: "./resources/images/tik-tok-ads.png"
        },
        {
            name: "Logo & corporate identity",
            logo: "./resources/images/branding.png"
        },
        {
            name: "Catalogue, brochure & qr code",
            logo: "./resources/images/brochure.png"
        }, {
            name: "Videography",
            logo: "./resources/images/videography.png"
        }, {
            name: "Commercial photography",
            logo: "./resources/images/photography.png"
        },
        {
            name: "Motiongraphic and animation videos",
            logo: "./resources/images/3d-movie.png"
        }
    ]
    const {lang} = useContext(langContext)
    const{t} = useTranslation()
    return (
        <div className={lang ? "services-container-ar":"services-container"}>
            <h3 className="services-header">{t("services")}</h3>
            <div className="cards-container">
                {servicesList.map((serv, i) => (
                    <Card name={t(serv.name)} key={i} icon={serv.logo} />
                ))}
            </div>
        </div>
    )
}

export default Services