import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import PageBanner from '../../Components/SharedComponents/PageBanner';

const Plans = () => {
    return (
        <>
            <Header></Header>
            <PageBanner title="Our Training Program"></PageBanner>
            <div>
                {/* <h1 className="text-4xl font-bold text-neutral-800"></h1> */}
                <section className="container flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">


                    <div className="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
                        <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src="https://i.ibb.co/2kTSTTY/1000-F-286305748-Vy5ed2f-Nnsw-FQa-SGINykodj-GBZ8ey1-ZJ.jpg" alt="" />
                        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                            <div className="absolute w-full flex place-content-center">
                                <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Yoga Program</p>
                            </div>
                            <div className="absolute w-full flex place-content-center mt-20">
                                <ol className="text-gray-100">
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ol>

                            </div>
                            <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">PURCHASE</button>
                        </div>
                    </div>
                    <div className="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
                        <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src="https://i.ibb.co/nCCM2Tj/1000-F-317917629-Hj-BCy-Rl-H1-Hpwwg2-Hf-Eb-Ex-Tdkby-Wi-GFu-N.jpg" alt="" />
                        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                            <div className="absolute w-full flex place-content-center">
                                <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Personal Program</p>
                            </div>
                            <div className="absolute w-full flex place-content-center mt-20">
                                <ol className="text-gray-100">
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ol>

                            </div>
                            <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">PURCHASE</button>
                        </div>
                    </div>
                    <div className="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36">
                        <img className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" src="https://i.ibb.co/g32hY1Z/1000-F-301820150-No-Jen84-Iosmu-T0-R3l-Hs-BUKB04xo-K2-Am-G.jpg" alt="" />
                        <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                        <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                            <div className="absolute w-full flex place-content-center">
                                <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">Group Program</p>
                            </div>
                            <div className="absolute w-full flex place-content-center mt-20">
                                <ol className="text-gray-100">
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ol>

                            </div>
                            <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">PURCHASE</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Plans;