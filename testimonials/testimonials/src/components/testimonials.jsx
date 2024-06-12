import React from 'react'
import { useState } from 'react'
import "./style.css"
function Testimonials(){
    const [currentIndex,setCurrentIndex] = useState(0)
    const testimonials = [
        {
            quote: "I love this product",
            author: "John Doe"
        },
        {
            quote: "I want this product",
            author: "Jane Doe"
        },
        {
            quote: "I need this product",
            author: "Github"
        }
            
    ];
    const handleNext = () => {
        if(currentIndex === testimonials.length -1){
            setCurrentIndex(0);
        }
        else{
            setCurrentIndex(currentIndex + 1);
        }
    }

    const handlePrev = () => {
        if(currentIndex === 0){
            setCurrentIndex(testimonials.length - 1);
        }
        else{
            setCurrentIndex(currentIndex - 1);
        }
    }
    return(
        <>
        <div className="testimonials">
            <div className="testimonials-quote">
                {testimonials[currentIndex].quote} </div>
                <div className="testimonials-author">- {testimonials[currentIndex].author}</div>
                <div className="testimonials-nav">
                    <button onClick={handlePrev}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                
            </div>
        </div>
        </>
    )
}

export default Testimonials