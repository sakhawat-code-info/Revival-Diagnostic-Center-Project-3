import { MdOutlineCancel } from "react-icons/md";
// import useAxiosSecure from "../hookPersonal/useAxiosSecure";
import UseCartData from "../hookPersonal/UseCartData";


const AllAppointments = () => {
    // const axiosSecure = useAxiosSecure()
    const { allBookingCartData, isPending, error } = UseCartData();

    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message





    return (
        <div className="container mx-auto">
            <div className="font-[sans-serif] bg-gray-100">
                <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">All Appointments</h2>

                    {/* for searching and sorting  */}
                    <div className="w-3/5 mx-auto mb-6">
                        <form className="flex flex-col md:flex-row gap-3">
                            <div className="flex">
                                <input type="text" placeholder="Search for the tool you like"
                                    className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500" />
                                <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
                            </div>
                            <select id="pricingType" name="pricingType"
                                className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
                                <option value="All" selected="">All</option>
                                <option value="Freemium">Freemium</option>
                                <option value="Free">Free</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </form>
                    </div>




                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-xl:gap-4 gap-6">



                        {/* single item  */}
                        {
                            allBookingCartData.map(item =>
                                <div key={item._id} className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                                    <button className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                        <MdOutlineCancel size={40} color="red" />
                                    </button>

                                    <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                        <img src={item.testImageURL} alt="Product 1"
                                            className="h-full w-full object-contain" />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-lg font-extrabold text-gray-800">Test Name : {item.testName}</h3>
                                        <h4 className="text-base text-gray-800 font-bold">Appointment.Date : {item.slotDate}</h4>
                                        <p className="text-gray-600 text-sm mt-2">Ref by : DR. Monir MBBS, BCS</p>

                                        <div className="flex items-center cursor-pointer w-max">
                                            <p className="text-xs text-gray-500 mt-0.5">{item.email}</p>
                                        </div>

                                        <form>
                                            <div className="mt-3">
                                                <label className="mb-1 block text-sm font-medium text-gray-700">Upload Report</label>
                                                <input id="example1" type="file" className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-500 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60" />
                                                <div className="flex items-center justify-center mt-4">
                                                    <input type="submit" className="px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-red-700 hover:bg-red-800 active:bg-red-700 " value="Save" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>)
                        }







                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAppointments;