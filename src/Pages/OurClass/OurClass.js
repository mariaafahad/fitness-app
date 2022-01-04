import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import PageBanner from "../../Components/SharedComponents/PageBanner";

const OurClasses = [
  {
    title: "PSYCHO TRAINING",
    img: "https://i.ibb.co/34s6gqj/class1.jpg",
  },
  {
    title: "SELF DEFENSE",
    img: "https://i.ibb.co/6t2v1yc/class2.jpg",
  },
  {
    title: "ADVANCE GYM",
    img: "https://i.ibb.co/fdXp5VS/class3.jpg",
  },
  {
    title: "CARDIO TRAINING",
    img: "https://i.ibb.co/YyYN8rL/class4.jpg",
  },
  {
    title: "STRENGTH TRAINING",
    img: "https://i.ibb.co/NnxzQhS/class5.jpg",
  },
  {
    title: "BEGINNER TRAINING",
    img: "https://i.ibb.co/mHLL4XB/class6.jpg",
  },
];

const OurClass = () => {
  return (
    <>
      <Header></Header>
      <PageBanner title="Our Classes"></PageBanner>
      <div class="container mx-auto py-10">
        <div class="flex flex-wrap mx-4">
          {OurClasses.map((each) => (
            <div key={each.title} class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
              <a
                href=""
                class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
              >
                <div class="relative pb-60 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src={each.img}
                    alt="Class"
                  ></img>
                </div>
                <div class="p-0">
                  <h3 class="px-2 py-5 leading-none bg-slate-900 text-yellow-300 font-semibold uppercase tracking-wide text-2xl">
                    {each.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default OurClass;
