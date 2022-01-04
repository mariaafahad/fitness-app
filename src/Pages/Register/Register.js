import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { user, registerWithEmail, error, isLoding } = useAuth();
  const [newUser, setNewUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const userData = { ...newUser };
    userData[field] = value;
    setNewUser(userData);
  };
  const handleRegister = (e) => {
    if (newUser.password1 !== newUser.password2) {
      alert("Don't match your password");
    }
    registerWithEmail(
      newUser.email,
      newUser.name,
      newUser.password1,
      location,
      navigate
    );
    e.preventDefault();
  };
  return (
    <>
      <div className="bg-indigo-100 lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div className="py-8 px-8 rounded-xl">
          <h1 className="font-medium text-2xl mt-3 text-center">Register</h1>
          <form onSubmit={handleRegister} action="" className="mt-6">
            <div className="my-5 text-sm">
              <input
                type="text"
                id="name"
                name="name"
                onBlur={handleBlur}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="my-5 text-sm">
              <input
                type="text"
                id="email"
                name="email"
                onBlur={handleBlur}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Enter your email"
              ></input>
            </div>
            <div className="my-5 text-sm">
              <input
                type="password"
                id="password"
                name="password1"
                onBlur={handleBlur}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Password"
              ></input>
            </div>
            <div className="my-5 text-sm">
              <input
                type="password"
                id="password2"
                name="password2"
                onBlur={handleBlur}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                placeholder="Confirm your Password"
              ></input>
            </div>

            <input
              type="text"
              id="name"
              name="name"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
              placeholder="Enter your name"
            ></input>
        </div>
        <div className="my-5 text-sm">

          <input
            type="text"
            id="email"
            name="email"
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="my-5 text-sm">

          <input
            type="password"
            id="password"
            name="password"
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Password"
          ></input>
        </div>
        <div className="my-5 text-sm">

          <input
            type="password"
            id="password2"
            name="password2"
            className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Confirm your Password"
          ></input>
        </div>

        <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">
          Register
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
        <span>Already have an account? </span>
        <Link to="/login" className="text-blue-900 font-medium">
          Please Login
        </Link>
      </p>
      <p className="mt-3 text-xs text-center font-light text-black-400">
        <span>Back to - </span>
        <Link to="/home" className="text-blue-900 font-medium">
          Home
        </Link>
      </p>
    </div>
            </div >
        </>
    );
};

export default Register;
