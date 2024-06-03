import { Link, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { MdOutlineDensitySmall, MdOutlineNewLabel } from "react-icons/md";
import { LuGalleryThumbnails } from "react-icons/lu";
import { GiTestTubes } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";


const AdminDashboard = () => {
    return (
        <div>

            <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-2xl">
                <div className="flex items-start justify-between">
                    <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
                        <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
                            <div className="flex items-center justify-center pt-6">
                                <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
                                    <defs>
                                        <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
                                            <stop offset="0%">
                                            </stop>
                                            <stop offset="86.1354%">
                                            </stop>
                                        </linearGradient>
                                    </defs>
                                    {/* website logo here */}
                                </svg>
                            </div>
                            <nav className="mt-6">
                                <div>


                                    {/* admin work  */}

                                    <Link to={'/adminDashboard/allUsers'} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                                        <span className="text-left">
                                            <BsPeople size={20} />
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            All Users
                                        </span>
                                    </Link>
                                    <Link to={'/adminDashboard/addNewTest'} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                                        <span className="text-left">
                                            <MdOutlineNewLabel size={20} />
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            Add New Test
                                        </span>
                                    </Link>
                                    <Link to={'/adminDashboard/allTests'} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                                        <span className="text-left">

                                            <GiTestTubes size={20} />
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            All Tests
                                        </span>
                                    </Link>

                                    <Link to={'/adminDashboard/allAppointments'} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                                        <span className="text-left">
                                            <LuGalleryThumbnails size={20} />
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            All Appointments
                                        </span>
                                    </Link>
                                    <Link to={'/adminDashboard/addBanner'} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                                        <span className="text-left">
                                            <MdOutlineNewLabel size={20} />
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            Add Banner
                                        </span>
                                    </Link>
                                    <Link to={'/adminDashboard/allBanner'} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                                        <span className="text-left">
                                            <MdOutlineDensitySmall size={20} />
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            All Banner
                                        </span>
                                    </Link>
                                    <Link to={'/adminDashboard/bookingRatioDeliveryReportChart'} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                                        <span className="text-left">
                                            <FaChartLine size={20} />
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            Chart
                                        </span>
                                    </Link>















                                    <div className="divider px-6"></div>

                                    {/* user data  */}
                                    <Link to={'/'} className="flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 dark:text-gray-200 hover:text-blue-500" href="#">
                                        <span className="text-left">
                                            <IoHome size={20} />
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            Home
                                        </span>
                                    </Link>






                                </div>
                            </nav>
                        </div>
                    </div>

                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <header className="z-40 items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 rounded-2xl">
                            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                                <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                                    <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                                        <div className="relative flex items-center w-full h-full lg:w-64 group">
                                            <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                                <svg fill="none" className="relative w-5 h-5" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <svg className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                                </path>
                                            </svg>
                                            <input type="text" className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search" />
                                            <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                                +
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                        <a href="#" className="relative block">
                                            <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                            <div className="flex flex-col flex-wrap sm:flex-row ">






                                <Outlet></Outlet>






                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default AdminDashboard;