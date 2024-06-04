import { Link } from "react-router-dom";
import useAlltestData from "../hookPersonal/useAlltestData";



const AllTests = () => {


    const [allTest] = useAlltestData();



    console.log(allTest);




    // const {
    //     testCatagory, testName, testImageURL, testDetails, testPrice, testAddDate, slotDate, slotTime
    // } = 


    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto font-[sans-serif]">
                <table className="min-w-full bg-white">
                    <thead className="whitespace-nowrap bg-gray-100 rounded">
                        <tr>
                            <th className="p-4 text-left text-sm font-semibold text-black">
                                No
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-black">
                                Test Name
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-black">
                                Details
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-black">
                                Price
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-black">
                                All Reservations
                            </th>
                            <th className="p-4 text-right text-sm font-semibold text-black">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody className="whitespace-nowrap">

                        {
                            allTest.map(item =>
                                <tr key={item._id} className="hover:bg-gray-50">
                                    <td className="p-4 text-sm text-black">
                                        01
                                    </td>
                                    <td className="p-4 text-sm text-black">
                                        <div className="flex items-center cursor-pointer w-max">
                                            {/* <img src='testImageURL' className="w-9 h-9 rounded-md shrink-0" /> */}
                                            <div className="ml-4">
                                                <p className="text-sm text-black">{item.testName}</p>
                                                <p className="text-xs text-gray-500 mt-1"></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-black">
                                        {item.testDetails.slice(0, 10)}
                                    </td>
                                    <td className="p-4 text-sm text-black">
                                        {item.testPrice} tk (15%)
                                        {/* <p className="text-xs text-gray-500 mt-1">550 tk</p> */}
                                    </td>
                                    <td className="p-4 text-sm text-green-700 font-extrabold text-center">
                                        170
                                        {/* <p className="text-xs text-gray-500 mt-1">Web UI/UX Design</p> */}
                                    </td>
                                    <td className="p-4 text-sm text-black">
                                        <div className=" flex justify-end">
                                            <Link to={'/adminDashboard/testDataUpdate'}
                                                className="btn text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor" className="w-6 h-6">
                                                    <path
                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                                </span>
                                                <span className="hidden md:inline-block">Edit</span>
                                            </Link>

                                            <button
                                                className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor" className="w-6 h-6">
                                                        <path
                                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </span>
                                                <span className="hidden md:inline-block">Delete</span>
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            )
                        }


                        <tr className="hover:bg-gray-50">
                            <td className="p-4 text-sm text-black">
                                01
                            </td>
                            <td className="p-4 text-sm text-black">
                                <div className="flex items-center cursor-pointer w-max">
                                    {/* <img src='testImageURL' className="w-9 h-9 rounded-md shrink-0" /> */}
                                    <div className="ml-4">
                                        <p className="text-sm text-black">FBS testName</p>
                                        <p className="text-xs text-gray-500 mt-1">Blood Catagory testCatagory</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 text-sm text-black">
                                testDetails
                                testDetails
                                testDetails
                                testDetails
                                testDetails
                            </td>
                            <td className="p-4 text-sm text-black">
                                470 tk (15%) testPrice
                                <p className="text-xs text-gray-500 mt-1">550 tk</p>
                            </td>
                            <td className="p-4 text-sm text-green-700 font-extrabold text-center">
                                170
                                {/* <p className="text-xs text-gray-500 mt-1">Web UI/UX Design</p> */}
                            </td>
                            <td className="p-4 text-sm text-black">
                                <div className=" flex justify-end">
                                    <Link to={'/adminDashboard/testDataUpdate'}
                                        className="btn text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" className="w-6 h-6">
                                            <path
                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        </span>
                                        <span className="hidden md:inline-block">Edit</span>
                                    </Link>

                                    <button
                                        className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" className="w-6 h-6">
                                                <path
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </span>
                                        <span className="hidden md:inline-block">Delete</span>
                                    </button>
                                </div>
                            </td>

                        </tr>


                    </tbody>
                </table>

                <div className="md:flex m-4">
                    <p className="text-sm text-gray-500 flex-1">Showind 1 to 5 of 100 entries</p>
                    <div className="flex items-center max-md:mt-4">
                        <p className="text-sm text-gray-500">Display</p>

                        <select className="text-sm text-gray-500 border border-gray-400 rounded px-1 py-2 mx-4 outline-none">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </select>

                        <div className="border flex rounded divide-x-2 border-gray-400 divide-gray-400">
                            <button type="button" className="px-4 py-2 hover:bg-gray-50 text-sm">Previous</button>
                            <button type="button" className="px-4 py-2 hover:bg-gray-50 text-sm">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTests;