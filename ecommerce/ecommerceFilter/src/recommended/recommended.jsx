import {useState} from 'react';
import './recommended.css';

function Recommended(){
    return(
        <>
        <div>
            <h2 className='recommended-title'>Recommended</h2>
            <div className="recommended-flex">
                <button className='btns'>All Products</button>
                <button className='btns'>Nike</button>
                <button className='btns'>Addidas</button>
                <button className='btns'>Puma</button>
                <button className='btns'>Vans</button>
                {/* <button className='btns'></button> */}
            </div>
        </div>
        </>
    )
}

export default Recommended;