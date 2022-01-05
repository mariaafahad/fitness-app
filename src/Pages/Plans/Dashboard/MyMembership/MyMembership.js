import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyMembership = () => {
    const [myOrder, setMyOrder] = useState({});
    const { user } = useAuth();
  
    useEffect(() => {
      const URL = `https://rocky-coast-79726.herokuapp.com/api/orders/${user?.email}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setMyOrder(data[0]));
    }, [user]);
    console.log(myOrder)
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
            <tbody className="bg-gray-200">
                <tr
                  className="bg-white border-4 border-gray-200 text-center"
                >
                  <td className="px-2 py-2 flex flex-row items-center">
                    {myOrder.email}
                  </td>
                  <td>
                    <span className="text-center ml-2 font-semibold">
                      {myOrder.serviceName}
                    </span>
                  </td>
                  <td className="px-2 py-2">{myOrder.price}</td>
                  <td className="px-2 py-2">
                    <span>{myOrder.action}</span>
                  </td>
                  <td className="px-2 py-2">
                    <span>Approve</span>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default MyMembership;