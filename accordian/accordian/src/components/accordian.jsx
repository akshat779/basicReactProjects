import React from "react";
import "./style.css";
import { useState } from 'react';
import { accordionData } from "./utils/content";

function Accordian({title,content}){
    const [isActive,setIsActive] = useState(false)
    return(
        <>
       <section className="accordion-card">
        <div className="header" onClick={() => setIsActive(!isActive)}>
            <div className="card-title">{title}</div>
            <p className="icon">{isActive ? "-" : "+"}</p>
        </div>
        <div className="content">
            {isActive && <p className = "card-info">{content}</p>}
        </div>
       </section>
        </>
    )
}

export default Accordian;