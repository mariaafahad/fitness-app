import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AdminRoute from "../../../Components/AdminRoute/AdminRoute";
import useAuth from "../../../Hooks/useAuth";
import AddReview from "../AddReview/AddReview";
import AllMembership from "../AllMembership/AllMembership";
import ClientReviews from "../ClientReviews/ClientReviews";
import MyMembership from "../MyMembership/MyMembership";
import MyProfile from "../MyProfile/MyProfile";

const Dashboard = () => {
  const { admin, user } = useAuth();
  return (
    <div>
      <div className="min-h-screen flex">
        <div className="py-12 px-10 w-1/5">
          <div className="flex space-2 items-center border-b-2 pb-4">
            <div className="ml-3">
              <h1 className="text-3xl font-bold text-gray-700">FITNESS</h1>
              <p className="text-center text-sm text-gray-600 mt-1 font-serif">
                DASHBOARD
              </p>
            </div>
          </div>
          <div className="flex items-center mt-2 p-1 bg-gray-600 ">
            <p className="text-lg text-white font-semibold">Menu</p>
          </div>
          <div className="mt-4">
            <p className="underline">User Menu</p>
            <ul className="">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard/mymembership">My Membership</Link>
              </li>
              <li>
                <Link to="/dashboard/my-profile">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/payment">Payment Details</Link>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <p className="underline">Admin Menu</p>
            <ul className="">
              <li>
                <Link to="/dashboard/all-membership">All Membership</Link>
              </li>
              <li>
                <Link to="/dashboard/add-review">Add Review</Link>
              </li>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>{" "}
              Logout
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 flex-grow py-12 px-10 w-4/5">
          <div className="flex justify-between border-b pb-8 mb-4">
            <div className="center">
              <h4 className="text-xl font-bold text-gray-600">
                Hello!! {user.displayName}
              </h4>
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
            <Routes>
              {!admin ? (
                <Route path="/" element={<MyProfile />} />
              ) : (
                <Route path="/" element={<AllMembership />} />
              )}
              <Route path="/mymembership" element={<MyMembership />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route
                path="/all-membership"
                element={
                  <AdminRoute>
                    <AllMembership />
                  </AdminRoute>
                }
              />
              <Route
                path="/add-review"
                element={
                  <AdminRoute>
                    <AddReview />
                  </AdminRoute>
                }
              />
              <Route
                path="/client-review"
                element={
                  <AdminRoute>
                    <ClientReviews />
                  </AdminRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
