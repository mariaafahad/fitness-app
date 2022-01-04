import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PageBanner from "../../Components/SharedComponents/PageBanner";

const OurClass = () => {
  const [ourClasses, setOurClasses] = useState([]);

  useEffect(() => {
    fetch("https://rocky-coast-79726.herokuapp.com/api/services")
      .then((res) => res.json())
      .then((data) => setOurClasses(data));
  }, []);

  return (
    <>
      <Header></Header>
      <PageBanner title="Our Classes"></PageBanner>
      <div className="container mx-auto py-10">
        <div className="flex flex-wrap mx-4">
          {ourClasses.map((each) => (
            <div
              key={each.title}
              className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4"
            >
              <Link
                to={`/class/${each._id}`}
                href=""
                className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div className="relative pb-60 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={each.img}
                    alt="Class"
                  ></img>
                </div>
                <div className="p-0">
                  <h3 className="px-2 py-5 leading-none bg-slate-900 text-yellow-300 font-semibold uppercase tracking-wide text-2xl">
                    {each.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default OurClass;
