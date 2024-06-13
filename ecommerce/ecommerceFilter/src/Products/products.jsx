import {useState} from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import './products.css';

function Products(){
    return(
        <>
        <section className="card-container">
            <section className="card">
                <img className="card-img "src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe" />
                <div className="card-details">
                    <h3 className="card-title">Shoe</h3>
                    <section className="card-reviews">
                        <AiFillStar className='ratings-start'/><AiFillStar className='ratings-start'/><AiFillStar className='ratings-start'/><AiFillStar className='ratings-start'/>
                        <span className='total-review'>4</span>
                    </section>
                    <div className="card-price">
                        <div className="price">
                            <del>Rs 300</del> 200
                        </div>
                        <div className="bag"><BsFillBagHeartFill className='bag-icon' /></div>
                    </div>
                </div>
            </section>
        </section>
        </>
    )
}

export default Products;