import { MdOutlineCancel } from "react-icons/md";


const AllAppointments = () => {
    return (
        <div className="container mx-auto">
            <div className="font-[sans-serif] bg-gray-100">
                <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-12">All Appointments</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-xl:gap-4 gap-6">



                        {/* single item  */}
                        <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                            <button className=" bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                <MdOutlineCancel size={40} color="red" />
                            </button>

                            <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                <img src="https://readymadeui.com/images/product9.webp" alt="Product 1"
                                    className="h-full w-full object-contain" />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-extrabold text-gray-800">Test Name : FBS</h3>
                                <h4 className="text-base text-gray-800 font-bold">Appointment.Date : 12/10/2024</h4>
                                <p className="text-gray-600 text-sm mt-2">Ref by : DR. Monir MBBS, BCS</p>

                                <div className="flex items-center cursor-pointer w-max">
                                    <img src='https://readymadeui.com/profile_4.webp' className="w-9 h-9 rounded-full shrink-0" />
                                    <div className="ml-4">
                                        <p className="text-sm text-black">Gladys Jones</p>
                                        <p className="text-xs text-gray-500 mt-0.5">gladys@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAppointments;