import React from 'react';

const Specialities = () => {
    return (
        <div>
            <h1 className="text-4xl text-zinc-900 font-bold">Our Speciality</h1>
            <div className=" container w-full flexclass p-20 m-20 md:flex md:justify-center md:space-x-8 md:px-14">
                <div className="flex relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                    <img
                        alt="gallery"
                        className="absolute inset-0 w-full object-cover object-center h-96"
                        src="https://i.ibb.co/PFPnRPw/dumbbells-fitness-335224-876.jpg"
                    />
                    <div className="px-8 py-10 relative z-10 w-full h-96  bg-gray-700 opacity-0 hover:opacity-25 items-center justify-center ">
                        <h2 className="tracking-widest text-4xl title-font font-medium text-green-100 m-8">
                            Nutrition

                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, totam.</h1>

                    </div>
                </div>
                <div className="flex relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                    <img
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="https://i.ibb.co/k04MtdB/young-man-sportswear-exercise-class-gym-1150-12372.jpg"
                    />
                    <div className="px-8 py-10 relative z-10 w-full  bg-gray-700 opacity-0 hover:opacity-25 items-center justify-center ">
                        <h2 className="tracking-widest text-4xl title-font font-medium text-green-100 m-8">
                            Workout

                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, pariatur.
                        </h1>
                    </div>
                </div>
                <div className="flex relative transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                    <img
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="https://i.ibb.co/VDNC8WF/muscular-sportsman-training-arms-with-dumbbell-7502-4782.jpg"
                    />
                    <div className="px-8 py-10 relative z-10 w-full  bg-gray-700 opacity-0 hover:opacity-25 items-center justify-center ">
                        <h2 className="tracking-widest text-4xl title-font font-medium text-green-100 m-8">
                            Progress

                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, doloribus!
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Specialities;