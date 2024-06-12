import react from 'react';
import { useState } from 'react';
import "./style.css";

function BackgroundChanger(){
    const[backgroundColor,setbackgroundColor] = useState("white")
    const[textColor,setTextColor] = useState("#1b1b1b")
    const[buttonStyle,setButtonStyle] = useState("white")
    const handleClick = () => {
        setbackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
    }
    return(
        <>
        <section style={{backgroundColor,color:textColor}}>
            <button onClick={handleClick} style={{buttonStyle,color:textColor,border:`2px solid ${textColor}`,}}>
            {backgroundColor === "#1b1b1b" ? "Black Theme" : "White Theme☀️"} 
            </button>
            <section className="content">
                <div>
                <h1>Welcome! To The Real World</h1>
            </div>
        </section>
        </section>
        
        </>
    )
}

export default BackgroundChanger