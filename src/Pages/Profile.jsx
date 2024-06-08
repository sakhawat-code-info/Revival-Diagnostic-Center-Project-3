import { Link } from "react-router-dom";
import UseAuth from "../hookPersonal/UseAuth";
import { useQuery } from "@tanstack/react-query";


const Profile = () => {

    const { user } = UseAuth();


    // console.log(user.email)

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(`http://localhost:5000/getSingleUserData/${user.email}`)
                .then((res) => res.json())
                .then(data => {
                    return data;
                })
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    console.log(data);

    return (
        <div className="flex items-center justify-center container">

            <div className="w-2/3 overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                        User Info
                    </h3>
                    <p className="max-w-2xl mt-1 text-sm text-gray-500">
                        You can update your information.
                    </p>
                </div>
                <div className="border-t border-gray-200 w-full">
                    <dl>
                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data?.name}
                            </dd>
                        </div>
                        <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Phone Number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.phoneNumber}
                            </dd>
                        </div>
                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.email}
                            </dd>
                        </div>
                        <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                District
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.districtN}
                            </dd>
                        </div>
                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Sub-District
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.subDitstrictN}
                            </dd>
                        </div>
                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Union
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.union}
                            </dd>
                        </div>
                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Age
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.age}
                            </dd>
                        </div>
                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Gender
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.gender}
                            </dd>
                        </div>
                        <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Blood Group
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {data.bloodGroup}
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="py-10 text-center">
                    <Link to={'/profileUpdate'}>
                        <button type="submit" className="relative w-1/3 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-teal-600 rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-teal-600 group-hover:translate-x-0 ease">
                                Edit Now &nbsp;
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-black font-extrabold transition-all duration-300 transform group-hover:translate-x-full ease">Edit</span>
                            <span className="relative invisible">Button Text</span>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Profile;