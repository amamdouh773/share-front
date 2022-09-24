import React, { useContext } from "react";
import { useQuery } from "react-query"
import axios from "axios"
import Card from "../../components/card/index.tsx"
import "./index.css"
import { langContext } from "../../helper/context";
import { useTranslation } from "react-i18next";
const WorkPage = () => {
    const { t } = useTranslation()
    const { lang } = useContext(langContext)
    const { isLoading, error, data } = useQuery("companies", () =>
        axios(`https://share-agency.herokuapp.com/api/rest/companies`,
            {
                headers: {
                    "content-type": "application/json",
                    "x-hasura-admin-secret": "Ahmed2771995"
                }
            }
        )
    )

    if (isLoading) return <h1>Loading..</h1>
    if (error) return <h1>error</h1>
    return (
        <div className="work">
            <h3 className={lang ? "work-header-ar" : "work-header"}>{t("customers")}</h3>
            <div className="work-cards">
                {data?.data.companies.map((company, i) =>
                    <Card name={company.name} icon={company.logo} key={i} />
                )}
            </div>
        </div>
    )
}

export default WorkPage