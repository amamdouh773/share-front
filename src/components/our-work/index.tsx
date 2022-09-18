import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import Slider from "../slider/index.tsx"
import './index.css'
import {langContext} from "../../helper/context"
const Work = () => {
    const {t} = useTranslation()
    const {lang} = useContext(langContext)
    return (
        <div className="work-container">
            <h3 className={lang ? "work-header-ar":"work-header"}>
                {t("work")}
            </h3>
            <Slider />
        </div>
    )
}

export default Work