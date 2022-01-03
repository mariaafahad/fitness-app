import React from 'react';
import About from '../../../Components/About/About';
import Contact from '../../Contact/Contact';
import Login from '../../Login/Login';
import Plans from '../../Plans/Plans';
import Register from '../../Register/Register';
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
            <Login></Login>
            <Register></Register>
        </>
    );
};

export default Home;