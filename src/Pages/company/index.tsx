import React, { useContext } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"
import Cover from "../../components/company-cover/index.tsx"
import "./index.css"
import Loading from "../../components/loading/index.tsx"
import { useTranslation } from "react-i18next"
import { langContext } from "../../helper/context"
import ServiceCard from "../../components/company-service-card/index.tsx"
const Company = () => {
    let companyID = useParams()
    
    const {lang} = useContext(langContext)
    const{t} = useTranslation()
    const { isLoading, error, data } = useQuery("company", () =>
        axios(`https://share-agency.herokuapp.com/api/rest/company/${companyID.id}`,
            {
                headers: {
                    "content-type": "application/json",
                    "x-hasura-admin-secret": "Ahmed2771995"
                }
            }
        )
    )
    if(isLoading) return <Loading />
    if(error) return <h1>Error</h1>
    console.log(data?.data.company)
    return (
        <div className={lang ? "company":"company-ar"}>
            <Cover logo={data?.data.company.logo} name={data?.data.company.name}/>
            <h3 className="services-header">{t("services")}</h3>
            {data?.data.company.prev_works.map((work,i)=>(
                <ServiceCard name={work.service.name} url={work.url} logo={work.service.logo}
                desc = {work.description}
                key={i}/>
            ))}
        </div>
    )
}

export default Company