import React, { useContext,useRef } from "react"
import { useTranslation } from "react-i18next"
import "./index.css"
import { langContext } from "../../helper/context.js"
import emailjs from '@emailjs/browser'

const Contact = () => {
    const { t } = useTranslation()
    const { lang } = useContext(langContext)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sylq939', 'template_cuv2jqr', form.current, '_wB3sFBKyWTuA1RCS')
          .then((result) => {
            console.log(result.text);
            window.location.reload();
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className={lang ? "contact-container-ar" : "contact-container"}>
            <div className="text-container">
                <div className="header">
                    <h3 className="contact-header">{t("contact")}</h3>
                    <h4 className="contact-sub-header">{t("contact-sub-head")}</h4>
                </div>
                <p className="contact-details">
                    {t("contact-text")}
                </p>
            </div>
            <form className="form-container" ref={form}>
                <div className="form-element">
                    <p className="form-label">{t("name-form")}</p>
                    <input type="text" className="form-input" name="user_name"/>
                </div>
                <div className="form-element">
                    <p className="form-label">{t("phone-form")}</p>
                    <input type="tel" className="form-input" name="user_phone"/>
                </div>

                <div className="form-element">
                    <p className="form-label">{t("company-name-form")}</p>
                    <input type="text" className="form-input" name="company_name"/>
                </div>
                <div className="form-element">
                    <p className="form-label">{t("company-field-form")}</p>
                    <input type="text" className="form-input" name="company_field"/>
                </div>
                <div className="form-element">
                    <p className="form-label">{t("message")}</p>
                    <textarea className="form-input" name="message"/>
                </div>
                <button type={"submit"} className={lang ? "main-btn-ar" : "main-btn"} onClick={sendEmail}>{t("contact")}</button>
            </form>
        </div>
    )
}

export default Contact