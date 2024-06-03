// import { Link } from "react-router-dom";


const UserAllTestPage = () => {
    // console.log(testCatagory, testName, testImageURL, testDetails, testPrice, testAddDate)



    return (
        <div className="container mx-auto">
            <div className="overflow-x-auto font-[sans-serif]">

                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800 my-12">All Test</h2>
                </div>

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
                            <th className="p-4 text-right text-sm font-semibold text-black">
                                Booking
                            </th>

                        </tr>
                    </thead>

                    <tbody className="whitespace-nowrap">

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

                            <td className="p-4 text-sm text-black">
                                <div className=" flex justify-end">


                                    <span
                                        className="w-[68px] block text-center py-1 border border-green-500 text-green-600 rounded text-xs">Test now</span>
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

export default UserAllTestPage;