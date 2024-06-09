import { Link } from "react-router-dom";
import UseAllBannerData from "../hookPersonal/UseAllBannerData";
import useAxiosSecure from "../hookPersonal/useAxiosSecure";
import Swal from "sweetalert2";


const AllBanner = () => {

    const [allBanner, refetch] = UseAllBannerData();

    const axiosSecure = useAxiosSecure();

    const handleDeleteBannerData = (deletedID) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const deleteOk = await axiosSecure.delete(`/bannerDataDelete/${deletedID}`);
                if (deleteOk.data.deletedCount === 1) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }

            }
        });

    }


    const isActiveBanner = async (id, doIt) => {


        if (doIt === 'active') {
            const updateBannerData = {
                bannerIsActive: 'false'
            }


            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    const updateResult = await axiosSecure.patch(`/updateActiveBanner/${id}`, updateBannerData);

                    if (updateResult.data.matchedCount) {
                        Swal.fire("Saved!", "", "success");
                        refetch()
                    }
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
            return;

        } else if (doIt === "inActive") {
            const updateBannerData = {
                bannerIsActive: 'true'
            }

            Swal.fire({
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    const updateResult = await axiosSecure.patch(`/updateActiveBanner/${id}`, updateBannerData);

                    if (updateResult.data.matchedCount) {
                        Swal.fire("Saved!", "", "success");
                        refetch()
                    }
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
            return;
        }
    }











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
                                Name & Title
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-black">
                                Description
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-black">
                                Coupon Price
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-black">
                                Active Btn
                            </th>
                            <th className="p-4 text-right text-sm font-semibold text-black">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="whitespace-nowrap">

                        {
                            allBanner?.map((item, index) => <tr key={item._id} className="hover:bg-gray-50">
                                <td className="p-4 text-sm text-black">
                                    {index + 1}
                                </td>
                                <td className="p-4 text-sm text-black">
                                    <div className="flex items-center cursor-pointer w-max">
                                        {/* <img src='bannerImageLink' className="w-9 h-9 rounded-md shrink-0" /> */}
                                        <div className="ml-4">
                                            <p className="text-sm text-black">{item.bannerName}</p>
                                            <p className="text-xs text-gray-500 mt-1">{item.bannerTitle}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-black">
                                    {item.bannerDescription}
                                </td>
                                <td className="p-4 text-sm text-black">
                                    {item.bannerCouponRate} tk (15%)
                                    <p className="text-xs text-gray-500 mt-1">{item.bannerActualRate} tk</p>
                                </td>



                                <td className="p-4 text-sm text-green-700 font-extrabold text-center">
                                    {item.bannerIsActive === 'true' ? <>
                                        <span onClick={() => isActiveBanner(item._id, "active")} className=" w-[68px] block text-center py-1 border border-green-500 text-green-600 rounded text-xs mb-1">Active</span>
                                    </> : <>
                                        <span onClick={() => isActiveBanner(item._id, "inActive")} className="w-[68px] block text-center py-1 border border-yellow-500 text-yellow-600 rounded text-xs">Inactive</span>
                                    </>}
                                    {/* <p className="text-xs text-gray-500 mt-1">Web UI/UX Design</p> */}
                                </td>




                                <td className="p-4 text-sm text-black">
                                    <div className="flex justify-end gap-1">
                                        <Link to={`/adminDashboard/bannerDataUpdate/${item._id}`}
                                            className="btn text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" className="w-6 h-6">
                                                <path
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                            </svg>
                                            </span>
                                            <span className="hidden md:inline-block">Edit</span>
                                        </Link>

                                        <button onClick={() => handleDeleteBannerData(item._id)}
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

                            </tr>)
                        }




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
        </div >
    );
};

export default AllBanner;