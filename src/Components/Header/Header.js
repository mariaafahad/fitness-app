import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, successUser, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const links = [
    {
      page: "Home",
      link: "/home",
    },
    {
      page: "Our Classes",
      link: "/class",
    },
    {
      page: "Plans",
      link: "/plans",
    },
    {
      page: "About Us",
      link: "/about",
    }
  ];
  return (
    <nav
      // style={{ backgroundColor: "#0006" }}
      className="absolute w-full z-30 top-0 text-white bg-gradient-to-b from-black"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            className="uppercase toggleColour text-white hover:text-yellow-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            to="/"
          >
            Fitness <span className="text-yellow-300">Gym</span>
          </Link>
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
            {links.map((link) => (
              <li key={link.page} className="mr-3">
                <Link
                  className="inline-block py-2 px-4 text-white font-bold no-underline hover:text-yellow-300 hover:text-underline"
                  to={link.link}
                >
                  {link.page}
                </Link>
              </li>
            ))}
            {user.email && (
              <li className="mr-3">
                <Link
                  className="inline-block py-2 px-4 text-white hover:text-yellow-300 font-bold no-underline hover:text-gray-100 hover:text-underline"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}
            {user.email && (
              <button className="inline-block py-2 px-4 text-white hover:text-yellow-300 font-bold no-underline hover:text-gray-100 hover:text-underline">
                {user.displayName}
              </button>
            )}
            {user.email ? (
              <button
                onClick={logOut}
                className="mx-auto md:mx-0 hover:underline uppercase bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold my-4 py-1 px-6 shadow-sm rounded-2xl"
              >
                logOut
              </button>
            ) : (
              <Link to="/login">
                <button className="mx-auto md:mx-0 hover:underline uppercase bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold my-4 py-1 px-6 shadow-sm rounded-2xl">
                  Login
                </button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
