import React from 'react'
import Banner from '../banner/Banner'
import Bollywood from '../bollywood/Bollywood';
import Hollywood from '../hollywood/Hollywood';
import Technology from '../technology/Technology';
import Fitness from '../fitness/Fitness';
import Food from '../food/Food';

const HomePage = () => {
    const bannerImage = {
        img: 'https://images.unsplash.com/photo-1601618613229-ec7645fad6fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    }

    return (
        <>
            <Banner props={bannerImage}/>
            <Bollywood props={true}/>
            <Technology props={true}/>
            <Hollywood props={true}/>
            <Fitness props={true}/>
            <Food props={true}/>
        </>
    )
}

export default HomePage