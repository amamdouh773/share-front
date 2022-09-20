import React from "react"
import "./index.css"
const Card = ({ name, icon,desc }) => {
    return (
        <div className="card-container">
            <img src={icon} alt="icon" className="icon" />
            <h4 className="name">{name}</h4>
            <p className="desc">{desc}</p>
        </div>
    )
}
export default Card