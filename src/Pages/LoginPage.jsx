import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../hookPersonal/UseAuth";
import { ToastContainer, toast } from "react-toastify";


const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const sendPersonDestination = location?.state || '/';


    const { loginWithGoogle, setUser, loginUser } = UseAuth();

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                setUser(result.user);
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(sendPersonDestination);
            }).catch((error) => {
                console.log(error.message);
            });
    }

    const handleLoginForm = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;


        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                Swal.fire({
                    // position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(sendPersonDestination);
            })
            .catch((error) => {
                toast.error("Email OR Password is Incorrect. Try again !!!");
                console.log(error.message);
                // ..
            });

    }



    return (
        <div className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4"
            style={{ backgroundImage: 'url(https://readymadeui.com/background-image.webp)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            <div className="max-w-md w-full mx-auto">
                <form onSubmit={handleLoginForm} className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
                    <div className="mb-10">
                        <h3 className="text-3xl font-extrabold">Sign in</h3>
                    </div >
                    <div>
                        <div className="relative flex items-center">
                            <input name="email" type="email" required
                                className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                                placeholder="Enter email" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333" className="w-[18px] h-[18px] absolute right-2"
                                viewBox="0 0 682.667 682.667">
                                <defs>
                                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                    </clipPath>
                                </defs>
                                <g transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                    <path fill="none"
                                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                        data-original="#000000"></path>
                                    <path
                                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                        data-original="#000000"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="relative flex items-center">
                            <input name="password" type="password" required
                                className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                                placeholder="Enter password" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#333" stroke="#333"
                                className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                <path
                                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                    data-original="#000000"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-6">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                            <label className="ml-3 block text-sm">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <a href="jajvascript:void(0);" className="text-sm font-semibold hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit"
                            className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#333] hover:bg-[#222] focus:outline-none">
                            Sign in
                        </button>
                        <p className="text-sm text-center mt-6">Do not have an account
                            <Link to={'/registration'}
                                className="font-semibold hover:underline ml-1 whitespace-nowrap">Register here
                            </Link>
                        </p>
                    </div>
                    <hr className="my-6 border-gray-500" />
                    <div className="space-x-8 flex justify-center">
                        <button onClick={handleGoogleLogin} type="button" className="border-none outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" className="inline" viewBox="0 0 512 512">
                                <path fill="#fbbd00"
                                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                    data-original="#fbbd00" />
                                <path fill="#0f9d58"
                                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                    data-original="#0f9d58" />
                                <path fill="#31aa52"
                                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                    data-original="#31aa52" />
                                <path fill="#3c79e6"
                                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                    data-original="#3c79e6" />
                                <path fill="#cf2d48"
                                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                    data-original="#cf2d48" />
                                <path fill="#eb4132"
                                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                    data-original="#eb4132" />
                            </svg>
                        </button>
                        <button type="button" className="border-none outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#000" viewBox="0 0 22.773 22.773">
                                <path
                                    d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>
                        <button type="button" className="border-none outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#007bff" viewBox="0 0 167.657 167.657">
                                <path
                                    d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                                    data-original="#010002"></path>
                            </svg>
                        </button>
                    </div>
                </form >
            </div >
            <ToastContainer />
        </div >


        // <div className="contain py-16">
        //     <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
        //         <div className="text-center">
        //             <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        //             <p className="text-gray-600 mb-6 text-sm">Welcome! So good to have you back!</p>
        //         </div>


        //         <div className="flex w-full flex-col gap-2">
        //             <button
        //                 className="hover:bg-gray-200 focus:outline-none inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
        //                 <svg className="h-[18px] w-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
        //                     <path
        //                         d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362l-.08-9.127c-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126l-.08 13.526c0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        //                         fill="#24292f"></path>
        //                 </svg>Continue with GitHub
        //             </button>
        //             <button onClick={handleGoogleLogin}
        //                 className="hover:bg-gray-200 focus:outline-none  inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><svg
        //                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 92" fill="none"
        //                     className="h-[18px] w-[18px]">
        //                     <path
        //                         d="M90 47.1c0-3.1-.3-6.3-.8-9.3H45.9v17.7h24.8c-1 5.7-4.3 10.7-9.2 13.9l14.8 11.5C85 72.8 90 61 90 47.1z"
        //                         fill="#4280ef"></path>
        //                     <path
        //                         d="M45.9 91.9c12.4 0 22.8-4.1 30.4-11.1L61.5 69.4c-4.1 2.8-9.4 4.4-15.6 4.4-12 0-22.1-8.1-25.8-18.9L4.9 66.6c7.8 15.5 23.6 25.3 41 25.3z"
        //                         fill="#34a353"></path>
        //                     <path
        //                         d="M20.1 54.8c-1.9-5.7-1.9-11.9 0-17.6L4.9 25.4c-6.5 13-6.5 28.3 0 41.2l15.2-11.8z"
        //                         fill="#f6b704"></path>
        //                     <path
        //                         d="M45.9 18.3c6.5-.1 12.9 2.4 17.6 6.9L76.6 12C68.3 4.2 57.3 0 45.9.1c-17.4 0-33.2 9.8-41 25.3l15.2 11.8c3.7-10.9 13.8-18.9 25.8-18.9z"
        //                         fill="#e54335"></path>
        //                 </svg>Continue with Google
        //             </button>
        //             <button
        //                 className="hover:bg-gray-200 focus:outline-none inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><svg
        //                     xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" x="0px" y="0px"
        //                     width="100" height="100" viewBox="0,0,256,256">
        //                     <g transform="translate(-26.66667,-26.66667) scale(1.20833,1.20833)">
        //                         <g fill="none" stroke="none">
        //                             <g transform="scale(5.33333,5.33333)">
        //                                 <path
        //                                     d="M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z"
        //                                     fill="#0288d1"></path>
        //                                 <path
        //                                     d="M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z"
        //                                     fill="#ffffff"></path>
        //                             </g>
        //                         </g>
        //                     </g>
        //                 </svg>Continue with LinkedIn
        //             </button>
        //         </div>



        //         <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
        //             <div className="h-px w-full bg-slate-200"></div>
        //             OR
        //             <div className="h-px w-full bg-slate-200"></div>
        //         </div>









        //         <form onSubmit={handleLoginForm}>
        //             <p className="text-red-500"></p>
        //             <div className="space-y-2">
        //                 <div>
        //                     <label className="text-gray-600 mb-2 block"></label>Email address
        //                     <input type="email" name="email" id="email" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400" placeholder="youremail.@domain.com" />
        //                 </div>
        //             </div>
        //             <div className="space-y-2">
        //                 <div>
        //                     <label className="text-gray-600 mb-2 block"></label>Password
        //                     <div className="relative">
        //                         <input type="password" name="password" id="password" className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400" placeholder="***********" />
        //                         <div
        //                             className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-8 text-gray-600 border-l border-gray-300">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        //                                 stroke="currentColor" className="w-5 h-5">
        //                                 <path
        //                                     d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z">
        //                                 </path>
        //                                 <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        //                             </svg>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="mt-4">
        //                 <button type="submit" className="block w-full py-2 text-center text-white bg-teal-500 border border-teal-500 rounded hover:bg-transparent hover:text-teal-500 transition uppercase font-roboto font-medium">Login</button>
        //                 <div className="flex gap-2 pt-5">
        //                     <p className="text-gray-600 text-sm">Do not have an account?</p><a className="text-gray-600 text-sm underline"
        //                         href="/registration">Register here</a>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        //     <ToastContainer />
        // </div>
    );
};

export default LoginPage;