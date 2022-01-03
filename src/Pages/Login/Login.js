import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="bg-indigo-100 lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
          <form action="" className="mt-6">
            <div className="my-5 text-sm">
              
              <input
                type="text"
                id="username"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Username"
              ></input>
            </div>
            <div className="my-5 text-sm">
              
              <input
                type="password"
                id="password"
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              ></input>
             
            </div>

            <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
              Login
            </button>
          </form>

          <div className="flex md:justify-between justify-center items-center mt-10">
            <div
              style={{ height: "1px" }}
              className="bg-gray-300 md:block hidden w-4/12"
            ></div>
            <p className="md:mx-2 text-sm font-light text-black-400">
              Login With Social
            </p>
            <div
              style={{ height: "1px" }}
              className="bg-gray-300 md:block hidden w-4/12"
            ></div>
          </div>

          <div className="grid md:grid-cols-1 gap-2 mt-7">
            <div>
              <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">
                Google
              </button>
            </div>
          </div>

          <p className="mt-7 text-xs text-center font-light text-black-400">
            <span>Don't have an account? </span>
            <Link to="/register" className="text-blue-900 font-medium">
              Create One
            </Link>
          </p>
          <p className="mt-3 text-xs text-center font-light text-black-400">
            <span>Back to - </span>
            <Link to="/home" className="text-blue-900 font-medium">
              Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
