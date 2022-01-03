import React from 'react';

const Login = () => {
    return (
        <div className="container m-20 p-20 border-2 rounded-lg ">

            <section class="flex flex-col md:flex-row h-screen items-center">
                <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src="https://i.ibb.co/R7Ss0tC/photo-1623874514711-0f321325f318.jpg" alt="" class="w-full h-full object-cover" />
                </div>
                <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">
                    <div class="w-full h-100">
                        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
                        <form class="mt-6" action="#" method="POST">
                            <div>
                                <label class="block text-gray-700">Email Address</label>
                                <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div class="mt-4">
                                <label class="block text-gray-700">Password</label>
                                <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                            </div>
                            <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
                        </form>
                        <hr class="my-6 border-gray-300 w-full" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;