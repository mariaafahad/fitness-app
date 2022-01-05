import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Stripe from "../Stripe/Stripe";

const MyMembership = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const URL = `https://rocky-coast-79726.herokuapp.com/api/orders/${user?.email}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user]);
  console.log(myOrder);

  const deleteHandler = (data) => {
    console.log(data._id);
    fetch(`https://rocky-coast-79726.herokuapp.com/api/orders/${data._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          alert("service deleted successfully");
          navigate("/class");
        }
      });
  };
  return (
    <div>
      <h3 className="text-4xl">My Membership</h3>
      <div className="flex space-x-4">
        <div className="flex mt-4 justify-center w-full">
          <table className="min-w-full table-auto w-full">
            <thead className="justify-between">
              <tr className="bg-gray-600">
                <th className="px-2 py-2">
                  <span className="text-indigo-50">Member</span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50">Package</span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50">Price</span>
                </th>

                <th className="px-2 py-2">
                  <span className="text-indigo-50">Status</span>
                </th>
                <th className="px-2 py-2">
                  <span className="text-indigo-50">Action</span>
                </th>
              </tr>
            </thead>
            {myOrder.map((data) => (
              <tbody key={data._id} className="bg-gray-200">
                <tr className="bg-white border-4 border-gray-200 text-center">
                  <td className="px-2 py-2 flex flex-row items-center">
                    {data.email}
                  </td>
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      {data.serviceName}
                    </span>
                  </td>
                  <td className="px-2 py-2">{data.price}</td>
                  <td className="px-2 py-2">
                    {data.action === "unpaid" ? (
                      <Stripe data={data} />
                    ) : (
                      <span className="text-green-600 text-lg uppercase font-bold">
                        paid
                      </span>
                    )}
                  </td>
                  <td className="px-2 py-2">
                    <button
                      onClick={() => deleteHandler(data)}
                      className="mx-auto lg:mx-0 hover:underline gradient bg-yellow-400 font-bold text-black my-1 py-2 px-8 shadow-lg uppercase"
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyMembership;
