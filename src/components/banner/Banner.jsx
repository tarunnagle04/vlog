import React from 'react';
import './Banner.css';
import BannerSideImages from './BannerSideImages';

const Banner = ({props}) => {
    const sideImages = [
        {
            img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80'
        },
        {
            img: 'https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        }
    ];

    return (
        <div className='bannerWrapper'>
            
            <img className='first-image' src={props.img} alt='empty'/>
            
            <div className='bannerSideImages'>
                <BannerSideImages props={sideImages}/>
            </div>
        </div>
    )
}

export default Banner