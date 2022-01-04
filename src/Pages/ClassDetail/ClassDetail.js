import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import PageBanner from "../../Components/SharedComponents/PageBanner";

const date = [
  { title: "Monday" },
  { title: "Tuesday" },
  { title: "Wednesday" },
  { title: "Thursday" },
  { title: "Friday" },
  { title: "Saturday" },
];
const Lifestyle = [
  { id: 1, title: "Having Slimmer Shapely Thighs" },
  { id: 2, title: "Getting Stronger Body" },
  { id: 3, title: "Increased Metabolism" },
  { id: 4, title: "Increased Muscular Endurance" },
  { id: 5, title: "Maximum Results in Less Time" },
  { id: 6, title: "Firm Hips and Tummy" },
];

const ClassDetail = () => {
  const [singleClass, setSingleClass] = useState({});
  const { classId } = useParams();

  useEffect(() => {
    fetch("https://rocky-coast-79726.herokuapp.com/api/services")
      .then((res) => res.json())
      .then((data) => {
        data.map((each) => (each._id === classId ? setSingleClass(each) : {}));
      });
  }, [classId]);

  return (
    <div>
      <Header></Header>
      <PageBanner title={singleClass.title + " Class"}></PageBanner>

      <div className=" md:flex md:mx-32 gap-6 sm:flex-row justify-center pt-12 my-12 sm:my-4">
        <div className="md:w-1/2 flex  flex-col mb-4 ">
          <img alt="gallery" className=" w-full" src={singleClass.img} />
          <div className=" py-2 flex justify-between flex-col w-full items-left  ">
            <p className=" font-serif text-lg text-left  text-black mt-10">
              {singleClass.description}
            </p>
            <ul className="text-left text-black text-2xl font-semibold capitalize">
              {Lifestyle.map((data) => (
                <li key={data.id} className="py-4">
                  <span className="text-yellow-400 mr-1 ">{data.id}.</span>
                  {data.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2  flex  flex-col mb-4 ml-8">
          <h1 className="text-black text-5xl font-bold">
            <span className="text-yellow-400">CLASS</span> SCHEDULE
          </h1>
          <div className="md:grid grid-cols-2 gap-0 mt-16">
            {/* <!-- box-1 --> */}
            {date.map((each) => (
              <div key={each.title} className="w-full p-4">
                <div className="block bg-white border border-gray-200 drop-shadow-xl rounded">
                  <div className="px-4 py-4">
                    <h3 className="px-2 py-2  text-black font-bold uppercase  text-2xl">
                      {each.title}
                    </h3>
                    <p className="text-yellow-400 font-semi-bold">
                      8:00 AM - 9:00 AM
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-end justify-end h-full">
            <Link to={`/plans`}>
              <button className="mx-auto lg:mx-0 hover:underline gradient bg-yellow-400 font-bold text-black my-6 py-2 px-8 shadow-lg uppercase">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
