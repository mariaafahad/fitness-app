import React from "react";
import About from "../../../Components/About/About";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import Contact from "../../Contact/Contact";
import Login from "../../Login/Login";
import Plans from "../../Plans/Plans";
import Register from "../../Register/Register";
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
      <Footer></Footer>
    </>
  );
};

export default Home;
