import React from "react";
import Stripe from "../Stripe/Stripe";

const ListCart = ({ data }) => {
  return (
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
              //   <button className="mx-auto lg:mx-0 hover:underline gradient bg-yellow-400 font-bold text-black my-6 py-2 px-8 shadow-lg uppercase">
              //     Pay
              //   </button>
              <Stripe data={data} />
            ) : (
              <span className="text-green-600 text-lg uppercase font-bold">
                Paid
              </span>
            )}
          </span>
        </td>
      </tr>
    </tbody>
  );
};

export default ListCart;
