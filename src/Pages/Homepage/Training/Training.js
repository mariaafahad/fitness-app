import React from "react";
import { Link } from "react-router-dom";

const Training = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-neutral-800 text-center">
        Our Training Program
      </h1>
      <section className="container max-w-5xl mx-auto m-8 md:flex px-4 sm:px-6 lg:px-4">
        <div className="relative group h-96 overflow-hidden bg-black m-auto mt-16">
          <img
            className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            src="https://i.ibb.co/2kTSTTY/1000-F-286305748-Vy5ed2f-Nnsw-FQa-SGINykodj-GBZ8ey1-ZJ.jpg"
            alt=""
          />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
            <div className="absolute w-full flex place-content-center">
              <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                Yoga Program
              </p>
            </div>
            <div className="absolute w-full flex place-content-center mt-20">
              <p className="font-sans text-center w-4/5 text-white mt-5">
                Collaborative effort of a group to achieve a common goal the
                most effective and efficient way!
              </p>
            </div>
            <Link to="/contact">
              <button className="absolute left-0 right-0 bottom-4 bg-yellow-300 text-black font-bold rounded h-10 w-48 mx-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="relative group h-96 overflow-hidden bg-black m-auto mt-16">
          <img
            className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
            src="https://i.ibb.co/nCCM2Tj/1000-F-317917629-Hj-BCy-Rl-H1-Hpwwg2-Hf-Eb-Ex-Tdkby-Wi-GFu-N.jpg"
            alt=""
          />
          <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
          <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
            <div className="absolute w-full flex place-content-center">
              <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                Personal Program
              </p>
            </div>
            <div className="absolute w-full flex place-content-center mt-20">
              <p className="font-sans text-center w-4/5 text-white mt-5">
                Collaborative effort of a group to achieve a common goal the
                most effective and efficient way!
              </p>
            </div>
            <Link to="/contact">
              <button className="absolute left-0 right-0 bottom-4 bg-yellow-300 text-black font-bold rounded h-10 w-48 mx-auto">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
