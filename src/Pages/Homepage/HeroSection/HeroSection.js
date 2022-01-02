import React from "react";
const img =
  "https://cdn.pixabay.com/photo/2017/01/16/15/28/boxer-1984344_960_720.jpg";

const HeroSection = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="pb-40 pt-40 bg-blend-overlay bg-no-repeat bg-cover bg-right"
      >
        <div className="text-white container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-4xl font-bold leading-tight">
              THE BEST FITNESS STUDIO IN TOWN
            </h1>
            <p className="leading-normal text-xl my-8">
            We believe that you can achieve anything, if there is a desire and the willingness to work hard for it. So, are you ready to take the challenge?
            </p>
            <button className="mx-auto md:mx-0 hover:underline uppercase bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold rounded my-6 py-3 px-12 shadow-sm">
              Join Us
            </button>
          </div>
          <div className="w-full md:w-2/5 py-6 text-center">
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
            ></path>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
