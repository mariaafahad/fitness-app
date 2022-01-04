import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PageBanner from "../../Components/SharedComponents/PageBanner";

const Checkout = () => {
  const { PlanId } = useParams();
  const [data, setData] = useState({});
  const [plans, setPlans] = useState({});

  useEffect(() => {
    fetch("/plandata.json")
      .then((res) => res.json())
      .then((data) => {
        data.map((each) => (each.id == PlanId ? setPlans(each) : {}));
      });
  }, [PlanId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleInputOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  return (
    <>
      <Header></Header>
      <PageBanner title={plans.name + " Plan"}></PageBanner>
      <div className="py-4 bg-gray-100">
        <div className="container mx-auto bg-gray-100 mt-10 sm:mt-0">
          <span className="text-5xl text-black font-bold flex w-fit mx-auto mt-4 inline px-4 py-2 bg-white rounded-md uppercase">
            Plan Price : ${plans.price}
          </span>
          <div className="flex flex-col md:max-w-5xl mx-auto md:gap-6 p-8 bg-gray-100">
            <div className="w-full">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 w-full">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label
                          htmlFor="name"
                          className="block text-left font-medium text-gray-700"
                        >
                          Your name
                        </label>
                        <input
                          onBlur={handleInputOnChange}
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 bg-gray-100 p-2 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email-address"
                          className="block text-left font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          onBlur={handleInputOnChange}
                          type="text"
                          name="email"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 bg-gray-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></input>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="phone"
                          className="block text-left font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <input
                          onBlur={handleInputOnChange}
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="phone"
                          className="mt-1 focus:ring-indigo-500 bg-gray-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="gender"
                          className="block text-left font-medium text-gray-700"
                        >
                          Gender
                        </label>
                        <select
                          id="gender"
                          name="gender"
                          autoComplete="gender-name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="birth"
                          className="block text-left font-medium text-gray-700"
                        >
                          Date of Birth
                        </label>
                        <input
                          onBlur={handleInputOnChange}
                          type="date"
                          name="birth"
                          id="birth"
                          autoComplete="birth"
                          className="mt-1 focus:ring-indigo-500 bg-gray-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></input>
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="street-address"
                          className="block text-left font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <input
                          onBlur={handleInputOnChange}
                          type="text"
                          name="address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 focus:ring-indigo-500 bg-gray-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="city"
                          className="block text-left font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          onBlur={handleInputOnChange}
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-1 focus:ring-indigo-500 bg-gray-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></input>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="postal-code"
                          className="block text-left font-medium text-gray-700"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          onBlur={handleInputOnChange}
                          type="text"
                          name="postalcode"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-1 focus:ring-indigo-500 bg-gray-100 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="inline-flex justify-center py-2 px-8 border border-gray-100 shadow-sm text-sm font-medium text-black hover:text-white transition uppercase bg-yellow-400 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Checkout;
