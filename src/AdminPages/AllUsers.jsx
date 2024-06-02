import { MdOutlineFileDownload } from "react-icons/md";

const AllUsers = () => {
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
                        <tr className="odd:bg-blue-50">
                            <td className="pl-4 w-8">
                                <MdOutlineFileDownload size={20} />
                            </td>
                            <td className="p-4 text-sm text-gray-800">
                                <div className="flex items-center cursor-pointer w-max">
                                    <img src='https://readymadeui.com/profile_4.webp' className="w-9 h-9 rounded-full shrink-0" />
                                    <div className="ml-4">
                                        <p className="text-sm text-black">Gladys Jones</p>
                                        <p className="text-xs text-gray-500 mt-0.5">gladys@example.com</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 text-sm text-gray-800 flex gap-3">
                                <span
                                    className="w-[68px] block text-center py-1 border border-green-500 text-green-600 rounded text-xs">Active</span>
                                <span
                                    className="w-[68px] block text-center py-1 border border-yellow-500 text-yellow-600 rounded text-xs">Blocked</span>

                            </td>
                            <td className="p-4 text-sm text-gray-800">
                                <button type="button" onClick={() => document.getElementById('my_modal_1').showModal()}
                                    className="w-[68px] block text-center py-1 border border-black text-black rounded text-xs hover:text-red-700 transition-all duration-300">
                                    See Info
                                </button>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
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
                                Admin / User
                            </td>



                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;