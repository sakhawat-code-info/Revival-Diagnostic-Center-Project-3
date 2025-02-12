import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UseAuth from "../hookPersonal/UseAuth";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../hookPersonal/useAxiosPublic";

const RegisterPage = () => {
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    const { createUser } = UseAuth();


    const [districtName, setDistrictName] = useState('');
    const [subDistrictName, setSubDistrictName] = useState('');


    // for district 
    const { data: districtData = [], } = useQuery({
        queryKey: ['districtData'],
        queryFn: () =>
            fetch('districts.json')
                .then((res) => res.json())
                .then(data => {
                    return (data);
                })

    })

    const handleDistrict = (e) => {
        const countryName = e.target.value;
        setDistrictName(countryName);
    }

    // console.log(districtName)

    // for sub-district 
    const { data: upazilas = [] } = useQuery({
        queryKey: ['upazila'],
        queryFn: () =>
            fetch('upazilas.json')
                .then((res) => res.json())
                .then(data => {
                    return (data);
                })

    })

    const canSelectUpazilas = upazilas.filter(item => item.district_id === districtName);

    const handleSubDistrict = (e) => {
        const subDistrictName = e.target.value;
        setSubDistrictName(subDistrictName);
    }

    // for union
    const { data: unions = [] } = useQuery({
        queryKey: ['unions'],
        queryFn: () =>
            fetch('unions.json')
                .then((res) => res.json())
                .then(data => {
                    return (data);
                })

    })

    const canSelectUnions = unions.filter(item => item.upazilla_id === subDistrictName)



    const handleRegisterForm = (event) => {

        event.preventDefault();
        const form = event.target

        const name = form.name.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        const district = districtData.find(item => item.id === districtName);
        const districtN = district.name;
        const subDistrict = upazilas.find(item => item.id === subDistrictName);
        const subDitstrictN = subDistrict.name
        const unionId = form.union.value;
        const unionName = unions.find(item => item.id === unionId);
        const union = unionName.name;

        const age = form.age.value;
        const gender = form.gender.value;
        const bloodGroup = form.bloodGroup.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const status = "active";
        const role = "user";

        const registerData = {
            name,
            phoneNumber,
            email,

            districtN,
            subDitstrictN,
            union,

            age,
            gender,
            bloodGroup,

            password,
            confirmPassword,
            status,
            role
        }
        // console.log(registerData)


        //     // password checking 
        if (password === confirmPassword) {
            if (password.length < 6) {
                toast.error('Minimum 6 digits required');
                return;
            } else if (!/[A-Z]/.test(password)) {
                toast.error('Use Uppercase')
                return;
            } else if (!/[a-z]/.test(password)) {
                toast('Use Lowercase')
                return;
            }
        } else {
            toast.error('Password & Confirm Password is not same')
            return;
        }


        // register data taking 
        createUser(email, password)
            .then(async (userCredential) => {
                const userInfo = userCredential.user;
                console.log(userInfo)

                const registerDone = await axiosPublic.post('/registerData', registerData);
                if (registerDone.data.insertedId) {
                    Swal.fire({

                        // position: "top-end",
                        icon: "success",
                        title: "Registration Successful. Please Login",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // takeProfileNameAndPhotoURL(name, photoURL)
                //     .then(() => {

                //     }).catch((error) => {
                //         toast.error(error)
                //     });

                // setUser(userInfo);

                navigate('/login');
            })
            .catch((error) => {
                toast.error(error.message);
                // ..
            });
    }




    return (
        <div className="flex justify-center items-center font-[sans-serif] text-[#333] h-full min-h-screen p-4"
            style={{ backgroundImage: 'url(https://readymadeui.com/background-image.webp)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl" >
                <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-extrabold  mb-6">Registration Now</h2>
                </div>
                <form onSubmit={handleRegisterForm}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                        <input type="number" id="phoneNumber" name="phoneNumber" placeholder="+88 01XX-XX XX XX"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="abc@abc.com"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">District</label>
                        <select id="district" name="district" onChange={(e) => handleDistrict(e)}
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                            <option value="">Select District</option>
                            {
                                districtData?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Sub-District</label>
                        <select id="SubDistrict" name="subDistrict" onChange={(e) => handleSubDistrict(e)}
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                            <option value="">Select Sub-District</option>
                            {
                                canSelectUpazilas?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Union</label>
                        <select id="union" name="union"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                            <option value="">Select Union</option>
                            {
                                canSelectUnions?.map(item => <option key={item.id} value={item.id}>{item.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Age</label>
                        <input type="number" id="age" name="age"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Gender</label>
                        <select id="gender" name="gender"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">What is your Blood Group?</label>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/3">
                                <label className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" name="bloodGroup" value="A+" className="mr-2" />A+
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" name="bloodGroup" value="A-" className="mr-2" />A-
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" name="bloodGroup" value="B+" className="mr-2" />B+
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" name="bloodGroup" value="B-" className="mr-2" />B-
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" name="bloodGroup" value="AB+" className="mr-2" />AB+
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" name="bloodGroup" value="AB-" className="mr-2" />AB-
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" name="bloodGroup" value="O+" className="mr-2" />O+
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" name="bloodGroup" value="O-" className="mr-2" />O-
                                </label>
                            </div>
                        </div>
                    </div>




                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2 relative">Password</label>
                        <div className="relative flex items-center">
                            <input type="password" name="password" placeholder="*****"
                                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                                className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                <path
                                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                    data-original="#000000"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                        <div className="relative flex items-center">
                            <input type="password" name="confirmPassword" placeholder="*****"
                                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                                className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                <path
                                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                    data-original="#000000"></path>
                            </svg>
                        </div>
                    </div>






                    {/* 
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" name="message"
                        className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows="5"></textarea>
                </div> */}
                    <div className="flex flex-col items-center justify-center">
                        {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button> */}

                        <button type="submit" className="relative w-2/3 mt-4  inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-teal-600 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-600 group-hover:translate-x-0 ease">
                                Lets Go &nbsp;
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-black font-extrabold transition-all duration-300 transform group-hover:translate-x-full ease">Register Now</span>
                            <span className="relative invisible">Button Text</span>
                        </button>








                        <div className="flex gap-2 pt-5">
                            <p className="text-gray-600 text-sm">Already have an account?</p>
                            <Link to={'/login'} className="text-gray-600 text-sm underline">
                                Login
                            </Link>
                        </div>
                    </div>

                </form>
                <ToastContainer />
            </div>
        </div>

    );
};

export default RegisterPage;