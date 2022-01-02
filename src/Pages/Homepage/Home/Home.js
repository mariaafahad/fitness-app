import React from 'react';
import About from '../../../Components/About/About';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';
import Specialities from '../Specialities/Specialities';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <About></About>
            <Features></Features>
            <Specialities></Specialities>
        </>
    );
};

export default Home;