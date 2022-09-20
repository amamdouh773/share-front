import React, { useContext } from "react"
import { useTranslation } from "react-i18next"
import { langContext } from "../../helper/context"
import Card from "../../components/card/index.tsx"
import { useQuery } from "react-query"
import axios from "axios"
import "./index.css"
const ServicesPage = () =>{
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
    
    if(isLoading) return <h1>loading...</h1>
    if(error) return <h1>Error Try again</h1>
    console.log(data)
    return (
        
        <div className="services">
            <h3 className="services-header">{t("services")}</h3>
            <div className={lang ? "services-cards-ar":"services-cards"}>
                {data?.data.services.map((serv,i)=><Card name={t(serv.name)} key={i} icon={serv.logo} desc={t(serv.description)}/>)}
            </div>
        </div>
    )
}

export default ServicesPage