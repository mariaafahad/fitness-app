import React from "react";

const features = [
  {
    title: "Training",
    img: "https://i.ibb.co/Yf4dsjG/1000-F-254439919-elnq-Ug-LQt48-CG5q-Lk-C62-ZOADd-TW5jg-DD.jpg",
    content:
      "Training properly is the main feature of our fitness gym.",
  },
  {
    title: "Guidance",
    img: "https://i.ibb.co/LYDpGQx/1000-F-255973060-r-Iru57r-RLw3hj-Wsr-Xlyh8-H70-Iw-L8i9-YP.jpg",
    content:
      "We never hesitate to provide the guidance to our members.",
  },
  {
    title: "Helping",
    img: "https://i.ibb.co/g32hY1Z/1000-F-301820150-No-Jen84-Iosmu-T0-R3l-Hs-BUKB04xo-K2-Am-G.jpg",
    content:
      "We always help our members at the time of training.",
  },
  {
    title: "Mental Support",
    img: "https://i.ibb.co/YyYN8rL/class4.jpg",
    content:
      "We are conscious about mental health of our members.",
  },
  {
    title: "Lifestyle Seminars",
    img: "https://i.ibb.co/NnxzQhS/class5.jpg",
    content:
      "We used to arrange seminars on lifestyles for our members.",
  },
  {
    title: "Lifetime Member",
    img: "https://i.ibb.co/mHLL4XB/class6.jpg",
    content:
      "We provide an offer of lifetime membership.",
  },
];

const Features = () => {
  return (
    <>
      <div className="py-16">
        <h3 className="text-2xl tracking-widest text-slate-900 text-center">
          FEATURES
        </h3>
        <h1 className="my-8 text-center text-5xl text-slate-900 font-bold">
          Our Features
        </h1>

        {/* <!-- Box --> */}
        <div className="container max-w-5xl m-8 flex flex-wrap mx-auto">
          {/* <!-- box-1 --> */}
          {features.map((each) => (
            <div key={each.title} className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
              <a
                href=""
                className="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden"
              >
                <div className="relative pb-60 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover transform hover:scale-110 transition duration-500"
                    src={each.img}
                    alt="Class"
                  ></img>
                </div>
                <div className="px-4 py-8">
                  <h3 className="px-2 py-5 leading-none text-slate-900 font-semibold uppercase tracking-wide text-2xl">
                    {each.title}
                  </h3>
                  <p>{each.content}</p>
                </div>
              </a>
            </div>

            // <div
            //   key={each.title}
            //   className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 shadow-lg hover:shadow-xl transform hover:scale-1 transition duration-500 "
            // >
            //   <div className="">
            //     <img className="w-full" src={each.img} alt="Feature" />
            //     <div className="mt-4 py-6 text-gray-600 text-center">
            //       <h1 className="text-xl font-bold">{each.title}</h1>
            //       <p className="mt-4 text-gray-600">{each.content}</p>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Features;
