import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import HeroSection from "../HeroSection/HeroSection";
import Specialities from "../Specialities/Specialities";
import Training from "../Training/Training";

const Home = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Features></Features>
      <Training></Training>
      <Specialities></Specialities>
        <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
