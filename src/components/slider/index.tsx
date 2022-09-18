import React, {  useCallback, useEffect, useMemo, useState } from "react"
import './index.css'
const companies = [{
    "name": "Casa Developments",
    "logo": "./resources/images/company1.jpeg"
},
{
    "name": "Colors Shutter",
    "logo": "./resources/images/company2.jpeg"
},
{
    "name": "Arkadia Wedding Hall",
    "logo": "./resources/images/company3.jpeg"
},
{
    "name": "AlQasr",
    "logo": "./resources/images/company4.jpeg"
},
{
    "name": "SOX Fashion",
    "logo": "./resources/images/company5.jpeg"
},
{
    "name": "Usama & Mahmoud",
    "logo": "./resources/images/company6.jpeg"
},
{
    "name": "مركز المصطفى",
    "logo": "./resources/images/company7.jpeg"
},
{
    "name": "Lahloba",
    "logo": "./resources/images/company8.jpeg"
},
{
    "name": "المركز الفني لخدمة الديزل",
    "logo": "./resources/images/company9.jpeg"
},
{
    "name": "c.N.c",
    "logo": "./resources/images/company10.jpeg"
},
{
    "name": "Mshmsh Neon",
    "logo": "./resources/images/company11.jpeg"
},
{
    "name": "Century 22",
    "logo": "./resources/images/company12.jpeg"
}]

const Slider = () => {
    const [minIndex, setMin] = useState(companies.length - 1)
    const [maxIndex, setMax] = useState(4)
    const activeCompanies = useMemo(() => companies.slice(0, 4), [])
    const next = useCallback(() => {
        maxIndex === companies.length - 1 ? setMax(0) : setMax(maxIndex + 1)
        minIndex === companies.length - 1 ? setMin(0) : setMin(minIndex + 1)
        activeCompanies.shift()
        activeCompanies.push(companies[maxIndex])
    }, [setMax, setMin, activeCompanies, maxIndex, minIndex])
    const prev = useCallback(() => {
        maxIndex === 0 ? setMax(companies.length - 1) : setMax(maxIndex - 1)
        minIndex === 0 ? setMin(companies.length - 1) : setMin(minIndex - 1)
        activeCompanies.pop()
        activeCompanies.unshift(companies[minIndex])
    }, [setMax, setMin, activeCompanies, maxIndex, minIndex])
    useEffect(()=>{
        const intervalId = setInterval(next, 3000);

        return () => clearInterval(intervalId)
    }, [next])

    return (
        <div className="slider-container">
            <img className="prev" alt="arrow" src="./resources/images/arrow.png" onClick={prev} />
            <div className="companies">
                {activeCompanies.map((company, i) => {
                    return (<img src={company.logo} alt="companylogo"
                        key={i}
                        className="company" />
                    )
                })}
            </div>
            <img className="next" alt="arrow" src="./resources/images/arrow.png" onClick={next} />
        </div>
    )
}

export default Slider