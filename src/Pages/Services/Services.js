import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import PageBanner from '../../Components/SharedComponents/PageBanner';
import Features from '../Homepage/Features/Features';

const Services = () => {
    return (
        <>
        <Header></Header>
        <PageBanner title="Services"></PageBanner>
        <Features></Features>
        <Footer></Footer>
        </>
        
    );
};

export default Services;