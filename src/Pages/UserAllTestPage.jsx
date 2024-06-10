// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import UseAllTestData from "../hookPersonal/UseAllTestData";


const UserAllTestPage = () => {



    const { allTest, isPending, error } = UseAllTestData();

    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className="bg-white font-[sans-serif]">
            <div className="container mx-auto">
                <div className="text-center my-10">
                    <h2 className="text-3xl font-extrabold text-[#333]">LATEST BLOGS</h2>
                </div>


                {/* for searching and sorting  */}
                <div className="w-full mx-auto mb-6">
                    <form className="flex flex-col md:flex-row gap-3 justify-center">
                        <div className="flex">
                            <input type="text" placeholder="Search for the tool you like"
                                className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500" />
                            <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
                        </div>
                        <select id="pricingType" name="pricingType"
                            className="w-2/10 h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                            <option selected="">Sort By</option>
                            <option value="10/12/2024">Today</option>
                            <option value="Free">Yesterday</option>
                        </select>
                    </form>
                </div>




                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto mb-20">


                    {/* , , testImageURL, , testPrice, testAddDate, , slotTime */}
                    {
                        allTest?.map((item) => <div key={item._id} className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
                            <img src={item.testImageURL} alt="Blog Post 2" className="w-full h-96 object-cover" />
                            <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm block text-gray-600 uppercase">{item.slotDate} | {item.testCatagory}</span>
                                    <Link to={`/testDetails/${item._id}`}>
                                        <button type="button" className="px-4 py-2 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
                                    </Link>
                                </div>
                                <h3 className="text-xl font-bold text-[#333]">{item.testName}</h3>
                                <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                                    <p className="text-gray-600 text-sm">{item.testDetails}</p>
                                </div>
                            </div>
                        </div>

                        )
                    }










                </div>
            </div>
        </div>
    );
};

export default UserAllTestPage;