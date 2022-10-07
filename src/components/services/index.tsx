import React from "react"
import Card from "../card/index.tsx"
import { langContext } from "../../helper/context"
import './index.css'
import Loading from "../../components/loading/index.tsx"

import { useContext } from "react"
import { useTranslation } from "react-i18next"
import {useQuery} from "react-query"
import axios from "axios"

const Services = () => {
    const {lang} = useContext(langContext)
    const{t} = useTranslation()
    const {isLoading,error,data} = useQuery("services",()=>
        axios(`https://share-agency.herokuapp.com/api/rest/services`,
            {
                headers:{
                    "content-type":"application/json",
                    "x-hasura-admin-secret":"Ahmed2771995"
                }
            }
        )
    )
    
    if(isLoading) return <Loading />
    if(error) return <h1>Error Try again</h1>
    return (
        <div className={lang ? "services-container-ar":"services-container"}>
            <h3 className="services-header">{t("services")}</h3>
            <div className="cards-container">
                {data?.data.services.map((serv,i)=><Card name={t(serv.name)} key={i} icon={serv.logo}/>)}
            </div>
        </div>
    )
}

export default Services