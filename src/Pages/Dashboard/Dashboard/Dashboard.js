import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="min-h-screen flex">
                <div class="py-12 px-10 w-1/4">
                    <div class="flex space-2 items-center border-b-2 pb-4">

                        <div class="ml-3">
                            <h1 class="text-3xl font-bold text-indigo-600">FITNESS</h1>
                            <p class="text-center text-sm text-indigo-600 mt-1 font-serif">DASHBOARD</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 mt-6 p-2 bg-indigo-600 rounded-md">

                        <div>
                            <p class="text-lg text-white font-semibold">Dashboard</p>
                        </div>
                    </div>
                    <div class="mt-8">
                        <ul class="space-y-10">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                    <div class="flex mt-20 space-x-4 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400 hover:text-indigo-600 transition duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </div>

                    </div>
                </div>
                <div class="bg-indigo-50 flex-grow py-12 px-10">
                    <div class="flex justify-between">
                        <div>
                            <h4 class="text-sm font-bold text-indigo-600">Hello!!</h4>
                            <h1 class="text-4xl font-bold text-indigo-900 mt-">Welcome to FITNESS!!</h1>
                        </div>
                        <div>
                            <div class="flex items-center border rounded-lg bg-white w-max py-2 px-4 space-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input class="outline-none" type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex space-x-4">

                            <div class="flex mt-10 justify-center">
                                <div>
                                    <table class="min-w-full table-auto">
                                        <thead class="justify-between">
                                            <tr class="bg-indigo-600">
                                                <th class="px-16 py-2">
                                                    <span class="text-gray-300"></span>
                                                </th>
                                                <th class="px-16 py-2">
                                                    <span class="text-indigo-50">Img</span>
                                                </th>
                                                <th class="px-16 py-2">
                                                    <span class="text-indigo-50">Name</span>
                                                </th>
                                                <th class="px-16 py-2">
                                                    <span class="text-indigo-50">Barcode</span>
                                                </th>

                                                <th class="px-16 py-2">
                                                    <span class="text-indigo-50">Price</span>
                                                </th>
                                                <th class="px-16 py-2">
                                                    <span class="text-indigo-50">Status</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-gray-200">
                                            <tr class="bg-white border-4 border-gray-200 text-center">
                                                <td class="px-16 py-2 flex flex-row items-center">
                                                    <img class="h-8 w-8 object-cover" src="https://randomuser.me/api/portraits/men/30.jpg" alt="" />
                                                </td>
                                                <td>
                                                    <span class="text-center ml-2 font-semibold">Dean Lynch</span>
                                                </td>
                                                <td class="px-16 py-2">samsung</td>
                                                <td class="px-16 py-2">
                                                    <span>05/06/2020</span>
                                                </td>
                                                <td class="px-16 py-2">
                                                    <span>10:00</span>
                                                </td>

                                                <td class="px-16 py-2">
                                                    <span class="text-green-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h5" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M5 12l5 5l10 -10" />
                                                        </svg>
                                                    </span>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;