import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Dashboard = () => {
  const [cartData, setCartData] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://rocky-coast-79726.herokuapp.com/api/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, [user.email]);
  return (
    <div>
      <div className="min-h-screen flex">
        <div className="py-12 px-10 w-1/4">
          <div className="flex space-2 items-center border-b-2 pb-4">
            <div className="ml-3">
              <h1 className="text-3xl font-bold text-gray-700">FITNESS</h1>
              <p className="text-center text-sm text-gray-600 mt-1 font-serif">
                DASHBOARD
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-6 p-2 bg-gray-600 rounded-md">
            <div>
              <p className="text-lg text-white font-semibold">Dashboard</p>
            </div>
          </div>
          <div className="mt-8">
            <ul className="space-y-10">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/payment">Payment Details</Link>
              </li>
              <li>
                <Link to="/class">Our classes</Link>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="flex mt-20 space-x-4 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-indigo-600 transition duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 flex-grow py-12 px-10">
          <div className="flex justify-between">
            <div className="center">
              <h4 className="text-xl font-bold text-gray-600">Hello!!</h4>
              <h1 className="text-4xl font-bold text-gray-800 mt-">
                Welcome to FITNESS!!
              </h1>
            </div>
            <div>
              <div className="flex items-center border rounded-lg bg-white w-max py-2 px-4 space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  className="outline-none"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex space-x-4">
              <div className="flex mt-10 justify-center">
                <div>
                  <table className="min-w-full table-auto">
                    <thead className="justify-between">
                      <tr className="bg-gray-600">
                        <th className="px-16 py-2">
                          <span className="text-gray-300"></span>
                        </th>
                        <th className="px-16 py-2">
                          <span className="text-indigo-50">Service Name</span>
                        </th>
                        <th className="px-16 py-2">
                          <span className="text-indigo-50">price</span>
                        </th>

                        <th className="px-16 py-2">
                          <span className="text-indigo-50">Time</span>
                        </th>
                        <th className="px-16 py-2">
                          <span className="text-indigo-50">Status</span>
                        </th>
                      </tr>
                    </thead>
                    {cartData?.map((data) => (
                      <tbody className="bg-gray-200">
                        <tr className="bg-white border-4 border-gray-200 text-center">
                          <td className="px-16 py-2 flex flex-row items-center">
                            <img
                              className="h-8 w-8 object-cover"
                              src="https://randomuser.me/api/portraits/men/30.jpg"
                              alt=""
                            />
                          </td>
                          <td>
                            <span className="text-left ml-2 font-semibold">
                              {data.serviceName}
                            </span>
                          </td>
                          <td className="px-8 py-2">$ {data.price}</td>
                          <td className="px-4 py-2">
                            <span>{data.createdAt?.slice(0, 10)}</span>
                          </td>
                          <td className="px-16 py-2">
                            <span>
                              {data.action === "unpaid" ? (
                                <button className="mx-auto lg:mx-0 hover:underline gradient bg-yellow-400 font-bold text-black my-6 py-2 px-8 shadow-lg uppercase">
                                  Pay
                                </button>
                              ) : (
                                <span>Paid</span>
                              )}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
