import React from "react";

const Specialities = () => {
  return (
    <div className="py-16">
      <h1 className="text-4xl text-zinc-900 font-bold mb-12 text-center">Our Speciality</h1>
      <div className="container w-full flexclass md:flex md:justify-center md:space-x-8 md:px-14 mx-auto">
        <div className="flex mb-4 relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <img
            alt="gallery"
            className=" absolute inset-0 w-full object-cover object-center h-96"
            src="https://i.ibb.co/PFPnRPw/dumbbells-fitness-335224-876.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full h-96 bg-gradient-to-t from-black opacity-0 hover:opacity-100 transform hover:scale-1 transition duration-300 items-center justify-center ">
            <h2 className="tracking-widest text-4xl title-font font-medium text-green-100 m-8">
              Nutrition
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              We are conscious about your nutrition.
            </h1>
          </div>
        </div>
        <div className="flex mb-4 relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://i.ibb.co/k04MtdB/young-man-sportswear-exercise-class-gym-1150-12372.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full h-96 bg-gradient-to-t from-black opacity-0 hover:opacity-100 transform hover:scale-1 transition duration-300 items-center justify-center ">
            <h2 className="tracking-widest text-4xl title-font font-medium text-green-100 m-8">
              Workout
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              We always make sure the workout routine of our member.
            </h1>
          </div>
        </div>
        <div className="flex mb-4 relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://i.ibb.co/VDNC8WF/muscular-sportsman-training-arms-with-dumbbell-7502-4782.jpg"
          />
          <div className="px-8 py-10 relative z-10 w-full h-96 bg-gradient-to-t from-black opacity-0 hover:opacity-100 transform hover:scale-1 transition duration-300 items-center justify-center ">
            <h2 className="tracking-widest text-4xl title-font font-medium text-green-100 m-8">
              Progress
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              We maintain the progress of out member.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
