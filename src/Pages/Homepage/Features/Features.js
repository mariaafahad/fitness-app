import React from 'react';

const Features = () => {
    return (
        <div>
            <div class=" py-14">
                <h3 class="text-2xl tracking-widest text-green-900 text-center">FEATURES</h3>
                <h1 class="mt-8 text-center text-5xl text-green-900 font-bold">Our Features</h1>

                {/* <!-- Box --> */}
                <div class="md:flex md:justify-center md:space-x-8 md:px-14">
                    {/* <!-- box-1 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src="https://i.ibb.co/Yf4dsjG/1000-F-254439919-elnq-Ug-LQt48-CG5q-Lk-C62-ZOADd-TW5jg-DD.jpg" alt="" />
                            <div class="mt-4 text-gray-600 text-center">
                                <h1 class="text-xl font-bold">Training</h1>
                                <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-900 text-white tracking-widest hover:bg-gray-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-2 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src="https://i.ibb.co/LYDpGQx/1000-F-255973060-r-Iru57r-RLw3hj-Wsr-Xlyh8-H70-Iw-L8i9-YP.jpg" alt="" />
                            <div class="mt-4 text-gray-600 text-center">
                                <h1 class="text-xl font-bold">Guidence</h1>
                                <p class="mt-4 text-gray-600">Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.</p>
                                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-900 text-white tracking-widest hover:bg-gray-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- box-3 --> */}
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src="https://i.ibb.co/g32hY1Z/1000-F-301820150-No-Jen84-Iosmu-T0-R3l-Hs-BUKB04xo-K2-Am-G.jpg" alt="" />
                            <div class="mt-4 text-gray-600 text-center">
                                <h1 class="text-xl font-bold">Extra Trainer</h1>
                                <p class="mt-4 text-gray-600">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-900 text-white tracking-widest hover:bg-gray-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Features;