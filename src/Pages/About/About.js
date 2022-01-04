import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PageBanner from "../../Components/SharedComponents/PageBanner";

const About = () => {
  return (
    <div>
      <Header></Header>
      <PageBanner title="About Us"></PageBanner>
      <div className="m-20">
        <div className="container flex flex-col justify-center">
          <div className="w-full">
            <img
              className="mx-auto"
              src="https://i.ibb.co/fHGzNf0/about-page.png"
              alt=""
            />
          </div>
          <div className="my-3">
            <h1 className="uppercase text-teal-900 text-3xl text-center"> Fitness Gym</h1>
            <h1 className="text-teal-800 text-2xl my-5 text-center">
              WE ARE HERE TO PROVIDE YOU THE BEST SERVICE.
            </h1>
            <p className="mt-4 text-gray-600 text-xl">
              No matter what you’re looking for in a gym, we’ve got a membership
              option made for you. All "FITNESS GYM" members enjoy unlimited
              access to their home club and the support of our friendly,
              knowledgeable staff anytime you need it.
              <br /> <br />
              It’s our goal to provide a clean, safe, welcoming environment for
              anyone who walks through our door, and all the equipment,
              amenities and support you need once you’re here.
              <br /> <br />
              You don't need to be gymtimidated. We have a guide to help you get
              started, keep going and celebrate every step.
              <br /> <br />
              We believe in providing a high-quality fitness experience at an
              affordable cost. Read more about our membership options to decide
              which one works best for you.
              <br /> <br />
              So, what are you waiting for? Welcome to FITNESS GYM...
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
