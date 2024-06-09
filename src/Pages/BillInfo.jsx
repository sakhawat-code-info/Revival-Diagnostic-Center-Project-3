import { MdAutoDelete } from "react-icons/md";
import UseCartData from "../hookPersonal/UseCartData";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import useAxiosSecure from "../hookPersonal/useAxiosSecure";
import { Link } from "react-router-dom";


const BillInfo = () => {
    const axiosSecure = useAxiosSecure()
    const [cartData, refetch] = UseCartData();

    const totalPrice = cartData.reduce((total, item) => total + parseInt(item.testPrice), 0)


    const removeItem = (id) => {
        console.log(id)
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
                const deleteOk = await axiosSecure.delete(`/cartItemDelete/${id}`)
                if (deleteOk.deletedCount) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } else {
                    console.log("No documents matched the query. Deleted 0 documents.");
                }



            }
        });
    }



    return (
        <div>
            <div className="font-sans max-w-4xl mx-auto bg-white py-4">
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
                        <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                        <hr className="border-gray-300 my-4" />

                        <div className="space-y-4">

                            {
                                cartData?.map(item =>
                                    <div key={item._id} className="grid sm:grid-cols-3 items-center gap-4">
                                        <div className="sm:col-span-2 flex items-center gap-4">
                                            <div className="w-24 h-24 shrink-0 bg-white p-1 rounded-md">
                                                <img src={item.testImageURL} alt="Test Image" className="w-full h-full object-contain" />
                                            </div>

                                            <div>
                                                <h3 className="text-base font-bold text-gray-800">{item.testName}</h3>
                                                <h6 className="text-xs text-gray-800 cursor-pointer mt-0.5">catagory</h6>
                                            </div>
                                        </div>
                                        <div className="ml-auto flex items-center gap-6">
                                            <div className="flex items-center">
                                                <TbCurrencyTaka size={20} />
                                                <h4 className="text-lg font-bold text-gray-800"> {item.testPrice}</h4>
                                            </div>

                                            <MdAutoDelete size={20} onClick={() => removeItem(item._id)} />
                                        </div>
                                    </div>)
                            }




                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
                        <div className="flex border border-blue-600 overflow-hidden rounded-md">
                            <input type="email" placeholder="Promo code"
                                className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
                            <button type='button' className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white">
                                Apply
                            </button>
                        </div>

                        <ul className="text-gray-800 mt-8 space-y-4">
                            <li className="flex justify-between gap-4 text-sm">Shipping
                                <div className="flex items-center">
                                    <TbCurrencyTaka size={16} />
                                    <span className="ml-auto font-bold">{totalPrice}</span>
                                </div>
                            </li>
                            <li className="flex justify-between gap-4 text-sm">Discount
                                <div className="flex items-center">
                                    <TbCurrencyTaka size={16} />
                                    <span className="ml-auto font-bold">0.00</span>
                                </div>
                            </li>

                            <li className="flex justify-between gap-4 text-sm">Total
                                <div className="flex items-center">
                                    <TbCurrencyTaka size={16} />
                                    <span className="ml-auto font-bold">{totalPrice}</span>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 space-y-2">

                            <Link to={'/checkout'}>
                                <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md mb-4">Checkout</button>
                            </Link>
                            <Link to={'/userAllTestPage'}>
                                <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillInfo;