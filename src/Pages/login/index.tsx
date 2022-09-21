import React, { useContext } from "react";
import { useTranslation } from 'react-i18next';
import { langContext } from "../../helper/context.js";
import "./index.css"
import { Link } from "react-router-dom"
import { FaRegCircle } from "react-icons/fa"

const LoginPage = () => {
    const { t } = useTranslation();
    const { lang } = useContext(langContext)
    return (
        <div className={lang ? "login-ar" : "login"}>
            <div className="info">
                <img src="./resources/images/login-poster.png" alt="login-poster" className="info-icon" />
                <h3 className="info-title">{t("login-welcome")}</h3>
                <p className="info-desc">{t("login-desc")}</p>
                <ul className="info-list">
                    <li className="list-item">
                        <FaRegCircle />
                        <span>{t("login-info-item-1")}</span>
                    </li>
                    <li className="list-item">
                        <FaRegCircle />
                        <span>{t("login-info-item-2")}</span>
                    </li>
                    <li className="list-item">
                        <FaRegCircle />
                        <span>{t("login-info-item-3")}</span>
                    </li>
                </ul>
            </div>
            <div className="actions">
                <div className="actions-title">
                    <h1>{t("login")}</h1>
                    <p>
                        {t("no-acc")}
                        <Link to="/contact">{t("contact")}</Link>
                    </p>

                </div>
                <form action="login-form" method="post" className="login-form">
                    <input type="text" className="form-input" placeholder={t("input-name")} />
                    <input type="text" placeholder={t("input-pass")} className="form-input" />
                    <Link className="main-btn" to="/">{t("login")}</Link>
                </form>
            </div>
        </div>
    )
}
export default LoginPage