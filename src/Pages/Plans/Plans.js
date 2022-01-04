import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PageBanner from "../../Components/SharedComponents/PageBanner";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/plandata.json")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <>
      <Header></Header>
      <PageBanner title="Our Training Program"></PageBanner>
      <div className="bg-gray-100">
        <div className="container lfe mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Program Basis Pricing
          </h1>
          <div className="md:flex flex-col gap-6 sm:flex-row justify-center pt-12 my-12 sm:my-4">
            {plans
              .filter((each) => each.category === "program")
              .map((each) => (
                <div
                  key={each.id}
                  className="md:w-1/3 flex mb-4 relative transition ease-in-out"
                >
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={each.img}
                  />
                  <div className="px-8 py-10 relative z-10 flex justify-between flex-col w-full bg-gradient-to-b from-black transform hover:scale-1 transition duration-300 items-center justify-center ">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                      {each.name}
                    </p>
                    <ul className="text-center text-yellow-400 uppercase">
                      {each.service.map((each) => (
                        <li key={each} className="border-b border-black py-4">
                          {each}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <p className="w-full pt-6 text-5xl text-white font-bold mb-4 text-center">
                        ${each.price}
                      </p>
                      <Link to={`/checkout/${each.id}`}>
                        <button className="mx-auto lg:mx-0 hover:underline gradient bg-yellow-400 text-black my-6 py-2 px-8 shadow-lg uppercase">
                          Purchase
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Time Basis Pricing
          </h1>
          <div className="md:flex flex-col gap-6 sm:flex-row justify-center pt-12 my-12 sm:my-4">
            {plans
              .filter((each) => each.category === "timely")
              .map((each) => (
                <div
                  key={each.id}
                  className="md:w-1/3 flex mb-4 relative transition ease-in-out"
                >
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={each.img}
                  />
                  <div className="px-8 py-10 relative z-10 w-full bg-gradient-to-b from-black transform hover:scale-1 transition duration-300 items-center justify-center ">
                    <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
                      {each.name}
                    </p>
                    <ul className="text-center text-yellow-400">
                      {each.service.map((each) => (
                        <li key={each} className="border-b border-black py-4">
                          {each}
                        </li>
                      ))}
                    </ul>
                    <p className="w-full pt-6 text-5xl text-white font-bold mb-4 text-center">
                      ${each.price}
                    </p>
                    <Link  to={`/checkout/${each.id}`}>
                      <div className="text-center">
                      <button className="mx-auto hover:underline gradient bg-yellow-400 text-black my-6 py-2 px-8 shadow-lg uppercase">
                        Purchase
                      </button>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Plans;
