import { useLoaderData } from "react-router-dom";
import UseAuth from "../hookPersonal/UseAuth";
import useAxiosSecure from "../hookPersonal/useAxiosSecure";
import Swal from "sweetalert2";
import UseCartData from "../hookPersonal/UseCartData";


const TestDetailsPage = () => {
    const { user } = UseAuth();
    const data = useLoaderData();
    const { refetch } = UseCartData();
    const axiosSecure = useAxiosSecure();

    const {
        testCatagory,
        testName,
        testImageURL,
        testDetails,
        testPrice,
        slotDate,
        slot,
    } = data;

    const addToCart = async (card) => {
        if (user && user.email) {
            const cartData = {
                testName,
                testImageURL,
                testPrice,
                slotDate,
                slot,
                testId: card._id,
                email: user.email,
                reportStatus: 'Pending'
            }
            const addANewTest = await axiosSecure.post('/cartItem', cartData)

            if (addANewTest.data.insertedId) {
                refetch();
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: `${testName} added to cart Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
    }

    return (
        <div className="container mx-auto">
            <div className="font-sans tracking-wide p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8">

                    <div className="lg:col-span-3 text-center">
                        <div className="lg:h-[450px] bg-cover p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                            <img src={testImageURL} alt="Product" className=" w-full h-full rounded-xl object-content bg-cover " />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-start gap-4">
                            <div>
                                <h2 className="text-2xl font-extrabold text-gray-800">{testName}</h2>
                                <p>{testCatagory}</p>


                            </div>

                            <div className="ml-auto flex flex-wrap gap-4">
                                <button type="button" className="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="currentColor" className="mr-1" viewBox="0 0 64 64">
                                        <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                    </svg>
                                    {slot}
                                </button>
                                <button type="button" className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0" data-original="#000000" />
                                        <path d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0" data-original="#000000" />
                                        <path d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0" data-original="#000000" />
                                        <path d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0" data-original="#000000" />
                                        <path d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0" data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <hr className="my-6" />

                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Price</h3>
                            <p className="text-gray-800 text-3xl font-bold">tk {testPrice}</p>
                        </div>

                        <hr className="my-6" />

                        <div>
                            <div className="mt-6 max-w-2xl">
                                <h3 className="text-lg font-bold text-gray-800">Product Features</h3>
                                <ul className="grid grid-cols-2 gap-3 mt-4">
                                    <li className="flex items-center text-sm text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Early Detection of Diseases
                                    </li>
                                    <li className="flex items-center text-sm text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Diagnosis of Symptoms
                                    </li>
                                    <li className="flex items-center text-sm text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Monitoring of Chronic Conditions
                                    </li>
                                    <li className="flex items-center text-sm text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Assessing Treatment Effectiveness
                                    </li>
                                    <li className="flex items-center text-sm text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Preventive Health Measures
                                    </li>
                                    <li className="flex items-center text-sm text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" className="mr-4 bg-green-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
                                            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                        </svg>
                                        Evaluating Therapeutic Responses
                                    </li>
                                </ul>

                                <div className="mt-6">
                                    <h3 className="text-lg font-bold text-gray-800">Test Description</h3>
                                    <p className="text-sm text-gray-800 mt-4">{testDetails}</p>
                                </div>
                            </div>
                        </div>

                        <hr className="my-6" />

                        <div className="flex flex-wrap gap-4">
                            <button type="button" className="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded">Pay Now</button>
                            <button onClick={() => addToCart(data)} type="button" className="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded">Add to Cart</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default TestDetailsPage;