import React from "react";
import "./index.css"

const ServiceCard = ({ name, url, logo, desc }) => {
    return (

        <div className="service-card-container">
            <div className="header-container">
                <div className="service-header">
                    <img src={logo} alt="service" className="service-icon" />
                    <span>{name}</span>
                </div>
                <p className="desc">
                    {desc}
                </p>
            </div>
            <img src={url} alt="serv_work" className="prev-work" />
        </div>
    )
}
export default ServiceCard