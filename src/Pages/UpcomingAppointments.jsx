import { SlCalender } from "react-icons/sl";
import { LuTestTube2 } from "react-icons/lu";
import { GiStethoscope } from "react-icons/gi";
import { RiSlideshowView } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

// transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4
const UpcomingAppointments = () => {
    return (
        <div>
            <div className="overflow-x-auto font-[sans-serif]">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100 whitespace-nowrap">
                        <tr>

                            <th className="p-4 text-left text-sm font-semibold text-black  ">
                                <div className="flex items-center ">
                                    <div className="w-4 h-4 fill-gray-500 inline mr-3 ">
                                        <SlCalender size={16} />
                                    </div>
                                    Appointment Date & Time
                                </div>
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-black  ">
                                <div className="flex items-center ">
                                    <div className="w-4 h-4 fill-gray-500 inline mr-3 ">
                                        <LuTestTube2 size={16} />
                                    </div>
                                    Test Name
                                </div>
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-black  ">
                                <div className="flex items-center ">
                                    <div className="w-4 h-4 fill-gray-500 inline mr-3 ">
                                        <CiLocationOn size={16} />
                                    </div>
                                    Test Location
                                </div>
                            </th>




                            <th className="p-4 text-left text-sm font-semibold text-black  ">
                                <div className="flex items-center ">
                                    <div className="w-4 h-4 fill-gray-500 inline mr-3 ">
                                        <GiStethoscope size={16} />
                                    </div>
                                    Suggest By
                                </div>
                            </th>




                            <th className="p-4 text-left text-sm font-semibold text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-gray-500 inline mr-3" viewBox="0 0 512 512">
                                    <path
                                        d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                                        data-original="#000000"></path>
                                </svg>
                                Patient Name
                            </th>

                            <th className="p-4 text-left text-sm font-semibold text-black  ">
                                <div className="flex items-center ">
                                    <div className="w-4 h-4 fill-gray-500 inline mr-3 ">
                                        <SlCalender size={16} />
                                    </div>
                                    Booking Date & Time
                                </div>
                            </th>




                            <th className="p-4 text-left text-sm font-semibold text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-gray-500 inline mr-3" viewBox="0 0 482.6 482.6">
                                    <path
                                        d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                        data-original="#000000" />
                                </svg>
                                Phone
                            </th>

                            <th className="p-4 text-left text-sm font-semibold text-black">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="whitespace-nowrap divide-y divide-gray-200">

                        {/* repeated  tr  */}
                        <tr className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer mb-4">
                            <td className="p-4 text-sm">
                                <div className="flex items-center cursor-pointer w-max">
                                    <div className="ml-4">
                                        <p className="text-sm text-black">12/15/2024</p>
                                        <p className="text-xs text-gray-500">7.40 PM</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 text-sm">
                                <div className="flex items-center cursor-pointer w-max">
                                    <div className="ml-4">
                                        <p className="text-sm text-black">DM</p>
                                        <p className="text-xs text-gray-500">By jonson Markari</p>
                                    </div>
                                </div>
                            </td>

                            <td className="p-4 text-sm">
                                <div className="flex items-center cursor-pointer w-max">
                                    <div className="ml-4">
                                        <p className="text-sm text-black">At Diagnostic Center || Home</p>
                                        <p className="text-xs text-gray-500">108 no room || Home Location</p>
                                    </div>
                                </div>
                            </td>

                            <td className="p-4 text-sm">
                                <div className="flex items-center cursor-pointer w-max">
                                    <div className="ml-4">
                                        <p className="text-sm text-black">Dr. Monir || Self</p>
                                        <p className="text-xs text-gray-500">MBBS, FCPC DMC</p>
                                    </div>
                                </div>
                            </td>

                            <td className="p-4 text-sm">
                                <div className="flex items-center cursor-pointer w-max">
                                    <img src='https://readymadeui.com/profile_4.webp' className="w-9 h-9 rounded-full shrink-0" />
                                    <div className="ml-4">
                                        <p className="text-sm text-black">Gladys Jones</p>
                                        <p className="text-xs text-gray-500">gladys@example.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 text-sm">
                                <div className="flex items-center cursor-pointer w-max">
                                    <div className="ml-4">
                                        <p className="text-sm text-black">12/15/2024</p>
                                        <p className="text-xs text-gray-500">7.40 PM</p>
                                    </div>
                                </div>
                            </td>


                            <td className="px-6 py-3">
                                +88 01939-727303
                            </td>

                            <td className="px-6 py-3">

                                <button className="mr-4" title="Edit">
                                    <RiSlideshowView size={20} />
                                </button>
                                <button className="mr-4" title="Delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                                        <path
                                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                            data-original="#000000" />
                                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                            data-original="#000000" />
                                    </svg>
                                </button>

                            </td>
                        </tr>


                    </tbody>
                </table>

                <div className="md:flex m-4">
                    <p className="text-sm text-gray-500 flex-1">Showing 1 to 5 of 100 entries</p>

                    <div className="flex items-center max-md:mt-4">
                        <p className="text-sm text-gray-500">Display</p>
                        <select className="text-sm text-gray-500 border border-gray-400 rounded h-7 mx-4 px-1 outline-none">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>

                        <ul className="flex space-x-1 ml-2">
                            <li className="flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500" viewBox="0 0 55.753 55.753">
                                    <path
                                        d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                        data-original="#000000" />
                                </svg>
                            </li>
                            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
                                1
                            </li>
                            <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
                                2
                            </li>
                            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
                                3
                            </li>
                            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
                                4
                            </li>
                            <li className="flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 rotate-180" viewBox="0 0 55.753 55.753">
                                    <path
                                        d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                                        data-original="#000000" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpcomingAppointments;