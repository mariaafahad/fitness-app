import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="absolute w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="uppercase toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            Fit<span className="text-yellow-300">ness</span>
          </a>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            onClick={() => setOpen(!open)}
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
          >
            <svg
              style={{ fill: "white" }}
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 bg-black lg:bg-transparent text-white p-4 lg:p-0 z-20 ${
            open ? "block" : "hidden "
          }`}
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-100 hover:text-underline"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-100 hover:text-underline"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-100 hover:text-underline"
                href="#"
              >
                Our Classes
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-100 hover:text-underline"
                href="#"
              >
                About us
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-100 hover:text-underline"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-gray-100 hover:text-underline"
                href="#"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
