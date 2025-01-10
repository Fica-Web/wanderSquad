import React from 'react';
import Hero from '../components/homePage/Hero';
import PackageListing from '../components/homePage/PackageListing';
import MainEvent from '../components/homePage/MainEvent';

const HomePage = () => {
    return (
        <>
            <Hero />
            <PackageListing />
            <MainEvent />
        </>
    )
}

export default HomePage
