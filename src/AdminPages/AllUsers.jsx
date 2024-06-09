import { MdOutlineFileDownload } from "react-icons/md";
// import { jsPDF } from "jspdf";
import useAxiosSecure from "../hookPersonal/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";



const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers');
            return res.data;
        }
    })

    // active block code 
    const isActiveBanner = async (id, doIt) => {


        if (doIt === 'active') {
            const updateBannerData = {
                status: 'blocked'
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
                    const updateResult = await axiosSecure.patch(`/updateActiveUser/${id}`, updateBannerData);

                    if (updateResult.data.matchedCount) {
                        Swal.fire("Saved!", "", "success");
                        refetch()
                    }
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
            return;

        } else if (doIt === "blocked") {
            const updateBannerData = {
                status: 'active'
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
                    const updateResult = await axiosSecure.patch(`/updateActiveUser/${id}`, updateBannerData);

                    if (updateResult.data.matchedCount) {
                        Swal.fire("Saved!", "", "success");
                        refetch()
                    }
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
            return;
        } else if (doIt === "admin") {
            const updateBannerData = {
                role: 'user'
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
                    const updateResult = await axiosSecure.patch(`/makeAdmin/${id}`, updateBannerData);

                    if (updateResult.data.matchedCount) {
                        Swal.fire("Saved!", "", "success");
                        refetch()
                    }
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });
            return;
        } else if (doIt === "user") {
            const updateBannerData = {
                role: 'admin'
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
                    const updateResult = await axiosSecure.patch(`/makeAdmin/${id}`, updateBannerData);

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
            <div className="font-[sans-serif] overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead className="whitespace-nowrap">
                        <tr>
                            <th className="pl-4 w-8">
                                <MdOutlineFileDownload size={20} />
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-800">
                                User Info
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-800">
                                Status Action
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-500 inline cursor-pointer ml-2"
                                    viewBox="0 0 401.998 401.998">
                                    <path
                                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                        data-original="#000000" />
                                </svg>
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-800">
                                Details
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-500 inline cursor-pointer ml-2"
                                    viewBox="0 0 401.998 401.998">
                                    <path
                                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                        data-original="#000000" />
                                </svg>
                            </th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-800">

                                Role Action
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                                    viewBox="0 0 401.998 401.998">
                                    <path
                                        d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                                        data-original="#000000" />
                                </svg>

                            </th>

                        </tr>
                    </thead>

                    <tbody className="whitespace-nowrap">

                        {
                            allUsers?.map((item) => <tr key={item._id} className="odd:bg-blue-50">
                                <td className="pl-4 w-8">
                                    <MdOutlineFileDownload size={20} />
                                </td>
                                <td className="p-4 text-sm text-gray-800">
                                    <div className="flex items-center cursor-pointer w-max">
                                        <img src='https://readymadeui.com/profile_4.webp' className="w-9 h-9 rounded-full shrink-0" />
                                        <div className="ml-4">
                                            <p className="text-sm text-black">{item.name}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{item.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-gray-800 flex gap-3">



                                    {item.status === 'active' ? <>
                                        <span onClick={() => isActiveBanner(item._id, "active")} className=" w-[68px] block text-center py-1 border border-green-500 text-green-600 rounded text-xs mb-1">Active</span>
                                    </> : <>
                                        <span onClick={() => isActiveBanner(item._id, "blocked")} className="w-[68px] block text-center py-1 border border-yellow-500 text-yellow-600 rounded text-xs">Blocked</span>
                                    </>}





                                </td>
                                <td className="p-4 text-sm text-gray-800">
                                    <button type="button" onClick={() => document.getElementById('my_modal_1').showModal()}
                                        className="w-[68px] block text-center py-1 border border-black text-black rounded text-xs hover:text-red-700 transition-all duration-300">
                                        See Info
                                    </button>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">


                                            <div className="w-full overflow-hidden bg-white shadow sm:rounded-lg">
                                                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                                                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                                                        User Info
                                                    </h3>
                                                    <button type="button"
                                                        className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                                                        PDF
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="currentColor" className="ml-2 inline" viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 16a.749.749 0 0 1-.542-.232l-5.25-5.5A.75.75 0 0 1 6.75 9H9.5V3.25c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25V9h2.75a.75.75 0 0 1 .542 1.268l-5.25 5.5A.749.749 0 0 1 12 16zm10.25 6H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"
                                                                data-original="#000000" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="border-t border-gray-200 w-full">
                                                    <dl>
                                                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Full name
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                {item.name}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Phone Number
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                {item.phoneNumber}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Email address
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                {item.email}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                District
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                {item.districtN}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Sub-District
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                {item.subDitstrictN}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Union
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                {item.union}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Age
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                {item.age}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Gender
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                {item.gender}
                                                            </dd>
                                                        </div>
                                                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">
                                                                Blood Group
                                                            </dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                                {item.bloodGroup}
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>

                                            </div>







                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                                <td className="p-4 text-sm text-gray-800">
                                    {item.role === 'admin' ? <>
                                        <span onClick={() => isActiveBanner(item._id, "admin")} className=" w-[68px] block text-center py-1 border border-red-500 text-red-600 rounded text-xs mb-1">Admin</span>
                                    </> : <>
                                        <span onClick={() => isActiveBanner(item._id, "user")} className="w-[68px] block text-center py-1 border border-green-500 text-green-600 rounded text-xs">User</span>
                                    </>}

                                </td>



                            </tr>)
                        }







                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;