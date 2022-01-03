import React from 'react';

const Training = () => {
    return (
        <div className="container m-20 md:flex md:justify-center md:space-x-8 md:px-14">
            <div class="wrapper bg-gray-400 antialiased text-gray-900">
                <div>

                    <img src="https://i.ibb.co/2kTSTTY/1000-F-286305748-Vy5ed2f-Nnsw-FQa-SGINykodj-GBZ8ey1-ZJ.jpg" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md" />

                    <div class="relative px-4 -mt-16  ">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Yoga</h4>

                            <div class="mt-1">
                                $180
                                <span class="text-gray-600 text-sm">   /month</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper bg-gray-400 antialiased text-gray-900">
                <div>

                    <img src="https://i.ibb.co/nCCM2Tj/1000-F-317917629-Hj-BCy-Rl-H1-Hpwwg2-Hf-Eb-Ex-Tdkby-Wi-GFu-N.jpg" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md" />

                    <div class="relative px-4 -mt-16  ">
                        <div class="bg-white p-6 rounded-lg shadow-lg">


                            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Personal Trainer</h4>

                            <div class="mt-1">
                                $300
                                <span class="text-gray-600 text-sm">   /month</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Training;