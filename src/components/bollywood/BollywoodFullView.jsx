import React from 'react';
import { useLocation } from 'react-router-dom';
import './Bollywood.css';

const BollywoodFullView = () => {
    const data = useLocation().state.data;
    // const data = useLocation();
    console.log(data)

    return (
        <div className='full-view'>
            <span>{data.title}</span>
            <img src={data.img} alt="empty" className='full-view-img'/>

            <p>{data.description}</p>
        </div>
    )
}

export default BollywoodFullView