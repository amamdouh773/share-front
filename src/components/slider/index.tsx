import React, { useCallback, useEffect, useMemo, useState } from "react"
import './index.css'
import { useQuery } from "react-query"
import Loading from "../../components/loading/index.tsx"

import axios from "axios"
import { Link } from "react-router-dom"
const Slider = () => {

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


    const [minIndex, setMin] = useState(data?.data.companies.length - 1)
    const [maxIndex, setMax] = useState(4)
    const activeCompanies = useMemo(() => data?.data.companies.slice(0, 4), [data?.data.companies])
    const next = useCallback(() => {
        maxIndex === data?.data.companies.length - 1 ? setMax(0) : setMax(maxIndex + 1)
        minIndex === data?.data.companies.length - 1 ? setMin(0) : setMin(minIndex + 1)
        activeCompanies.shift()
        activeCompanies.push(data?.data.companies[maxIndex])
    }, [setMax, setMin, activeCompanies, data?.data.companies, maxIndex, minIndex])
    const prev = useCallback(() => {
        maxIndex === 0 ? setMax(data?.data.companies.length - 1) : setMax(maxIndex - 1)
        minIndex === 0 ? setMin(data?.data.companies.length - 1) : setMin(minIndex - 1)
        activeCompanies.pop()
        activeCompanies.unshift(data?.data.companies[minIndex])
    }, [setMax, setMin, activeCompanies, data?.data.companies, maxIndex, minIndex])
    useEffect(() => {
        const intervalId = setInterval(next, 3000);

        return () => clearInterval(intervalId)
    }, [next])

    if (isLoading) return <Loading />
    if (error) return <h1>Error</h1>


    return (
        <div className="slider-container">
            <img className="prev" alt="arrow" src="./resources/images/arrow.png" onClick={prev} />
            <div className="companies">
                {activeCompanies.map((company, i) => {
                    return (
                        <Link to={`/company/${company.id}`} key={i}>
                            <img src={company.logo} alt="companylogo"

                                className="company"
                            />
                        </Link>
                    )
                })}
            </div>
            <img className="next" alt="arrow" src="./resources/images/arrow.png" onClick={next} />
        </div>
    )
}

export default Slider