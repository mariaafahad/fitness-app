import React from "react";

const features = [
  {
    title: "Training",
    img: "https://i.ibb.co/Yf4dsjG/1000-F-254439919-elnq-Ug-LQt48-CG5q-Lk-C62-ZOADd-TW5jg-DD.jpg",
    content:
      "Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
  },
  {
    title: "Guidence",
    img: "https://i.ibb.co/LYDpGQx/1000-F-255973060-r-Iru57r-RLw3hj-Wsr-Xlyh8-H70-Iw-L8i9-YP.jpg",
    content:
      "Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
  },
  {
    title: "Trainings",
    img: "https://i.ibb.co/g32hY1Z/1000-F-301820150-No-Jen84-Iosmu-T0-R3l-Hs-BUKB04xo-K2-Am-G.jpg",
    content:
      "Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
  },
  {
    title: "Mental Support",
    img: "https://i.ibb.co/YyYN8rL/class4.jpg",
    content:
      "Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
  },
  {
    title: "Lifestyle Seminars",
    img: "https://i.ibb.co/NnxzQhS/class5.jpg",
    content:
      "Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
  },
  {
    title: "Lifetime Membership",
    img: "https://i.ibb.co/mHLL4XB/class6.jpg",
    content:
      "Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
  },
];

const Features = () => {
  return (
    <>
      <div class="py-16">
        <h3 class="text-2xl tracking-widest text-slate-900 text-center">
          FEATURES
        </h3>
        <h1 class="my-8 text-center text-5xl text-slate-900 font-bold">
          Our Features
        </h1>

        {/* <!-- Box --> */}
        <div class="container max-w-5xl m-8 flex flex-wrap mx-auto">
          {/* <!-- box-1 --> */}
          {features.map((each) => (
            <div key={each.title} class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
              <a
                href=""
                class="c-card block bg-white shadow-md hover:shadow-xl overflow-hidden"
              >
                <div class="relative pb-60 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover transform hover:scale-110 transition duration-500"
                    src={each.img}
                    alt="Class"
                  ></img>
                </div>
                <div class="px-4 py-8">
                  <h3 class="px-2 py-5 leading-none text-slate-900 font-semibold uppercase tracking-wide text-2xl">
                    {each.title}
                  </h3>
                  <p>{each.content}</p>
                </div>
              </a>
            </div>

            // <div
            //   key={each.title}
            //   class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 shadow-lg hover:shadow-xl transform hover:scale-1 transition duration-500 "
            // >
            //   <div class="">
            //     <img class="w-full" src={each.img} alt="Feature" />
            //     <div class="mt-4 py-6 text-gray-600 text-center">
            //       <h1 class="text-xl font-bold">{each.title}</h1>
            //       <p class="mt-4 text-gray-600">{each.content}</p>
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
