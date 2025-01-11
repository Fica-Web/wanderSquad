import React from 'react';
import Hero from '../components/homePage/Hero';
import PackageListing from '../components/homePage/PackageListing';
import MainEvent from '../components/homePage/MainEvent';
import ServicesListing from '../components/homePage/ServicesListing';

const HomePage = () => {
    return (
        <>
            <Hero />
            <PackageListing />
            <MainEvent />
            <ServicesListing />
        </>
    )
}

export default HomePage
