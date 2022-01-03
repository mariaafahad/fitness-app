import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [user, setUser] = useState({});
  const location = useLocation();
  const nevigate = useNavigate();
  const { loginWithEmail, isLoding, error, signInWithGoogle } = useAuth();

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  const handleLogin = (e) => {
    loginWithEmail(user.email, user.password, location, nevigate);
    e.preventDefault();
  };

  const googleLogin = () => {
    signInWithGoogle(location, nevigate);
  };
  return (
    <>
      <div className="bg-indigo-100 lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        {!isLoding && (
          <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
            <form onSubmit={handleLogin} action="" className="mt-6">
              <div className="my-5 text-sm">
                <input
                  type="text"
                  id="email"
                  name="email"
                  onBlur={handleBlur}
                  className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                  placeholder="Email"
                ></input>
              </div>
              <div className="my-5 text-sm">
                <input
                  type="password"
                  id="password"
                  name="password"
                  onBlur={handleBlur}
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
                <button
                  className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700"
                  onClick={googleLogin}
                >
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
            <p className="md:mx-2 text-sm font-light text-black-400">{error}</p>
          </div>
        )}
        {isLoding && (
          <p className="md:mx-2 text-sm font-light text-black-400">
            please wait .....
          </p>
        )}
      </div>
    </>
  );
};

export default Login;
