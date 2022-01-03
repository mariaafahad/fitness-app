import React from 'react';
import About from '../../../Components/About/About';
import Contact from '../../Contact/Contact';
import Plans from '../../Plans/Plans';
import Features from '../Features/Features';
import HeroSection from '../HeroSection/HeroSection';
import Specialities from '../Specialities/Specialities';
import Training from '../Training/Training';

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <About></About>
            <Features></Features>
            <Training></Training>
            <Specialities></Specialities>
            <Plans></Plans>
            <Contact></Contact>
        </>
    );
};

export default Home;