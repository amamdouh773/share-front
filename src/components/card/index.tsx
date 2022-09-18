import React from "react"
import "./index.css"
const Card = ({ name, icon }) => {
    return (
        <div className="card-container">
            <img src={icon} alt="icon" className="icon" />
            <h4 className="name">{name}</h4>
        </div>
    )
}
export default Card