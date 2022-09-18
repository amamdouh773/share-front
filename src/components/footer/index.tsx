import "./index.css"
import React from "react"
import { useTranslation } from "react-i18next"


const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className="footer-container">
            <div className="main-footer">
                <img src="./resources/images/logo-share.png" alt="logo" className="logo" />
                <div className="social-links">
                    <a href="https://www.facebook.com/shareadvertisingagency"><img src=".\resources\images\facebook.png" alt="link" className="link" /></a>
                    <a href="https://www.instagram.com/shareformediaa/?utm_source=qr"><img src=".\resources\images\instagram.png" alt="link" className="link" /></a>
                    <a href="tel:+201069960013"><img src=".\resources\images\whatsapp.png" alt="link" className="link"/></a>
                    
                </div>
            </div>
            <h5 className="rights">{t("rights")}</h5>
        </div>
    )
}
export default Footer