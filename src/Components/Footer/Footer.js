import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6 gap-x-8">
          {/* Logo Column */}
          <div className="md:w-1/4 mb-6 text-black">
            <Link
              className="text-white no-underline font-bold text-2xl lg:text-4xl uppercase"
              to="/home"
            >
              Fitness <span className="text-yellow-300">Gym</span>
            </Link>
            <p className="mt-4 text-2xl text-white">
              THE BEST FITNESS STUDIO IN TOWN
            </p>
          </div>
          {/* Menu Column */}
          <div className="md:w-1/4 md:text-left">
            <p className="uppercase text-gray-400 md:mb-6 font-bold">Footer Menu</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/home"
                  className="no-underline hover:underline text-gray-500 hover:text-yellow-500"
                >
                  Our Services
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/class"
                  className="no-underline hover:underline text-gray-500 hover:text-yellow-500"
                >
                  Our Classes
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/pricing"
                  className="no-underline hover:underline text-gray-500 hover:text-yellow-500"
                >
                  Our Pricing
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/about"
                  className="no-underline hover:underline text-gray-500 hover:text-yellow-500"
                >
                  About Us
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="/contact"
                  className="no-underline hover:underline text-gray-500 hover:text-yellow-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Menu Column */}
          <div className="md:w-1/4 md:text-left">
            <p className="uppercase text-gray-400 md:mb-6 font-bold">
              Connect with Us
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="http://www.facebook.com/"
                  className="no-underline hover:underline text-gray-500 hover:text-yellow-500"
                >
                  Facebook
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="http://www.twitter.com/"
                  className="no-underline hover:underline text-gray-500 hover:text-yellow-500"
                >
                  Twitter
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="http://www.youtube.com/"
                  className="no-underline hover:underline text-gray-500 hover:text-yellow-500"
                >
                  Youtube
                </Link>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link
                  to="http://www.instagram.com/"
                  className="no-underline hover:underline text-gray-500 hover:text-yellow-500"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          {/* Menu Column */}
          <div className="md:w-1/4 md:text-left">
            <p className="uppercase text-gray-400 md:mb-6 font-bold">
              Join Our Newsletter
            </p>
            <p className="text-gray-400">
              Get exclusive news, features, and updates from The Shredder Weight
              Loss Academy.
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 w-full py-5">
          Copyright © 2022 | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
