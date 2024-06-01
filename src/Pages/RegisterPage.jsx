

const RegisterPage = () => {

    // const navigate = useNavigate();
    // const { createUser, takeProfileNameAndPhotoURL, setUser } = UseAuth();

    // const handleRegisterForm = (event) => {

    //     event.preventDefault();
    //     const form = event.target

    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const photoURL = form.photoURL.value;


    //     // password checking 
    //     if (password.length < 6) {
    //         toast.error('Minimum 6 digits required');
    //         return;
    //     } else if (!/[A-Z]/.test(password)) {
    //         toast.error('Use Uppercase')
    //         return;
    //     } else if (!/[a-z]/.test(password)) {
    //         toast('Use Lowercase')
    //         return;
    //     }


    //     // register data taking 
    //     createUser(email, password)
    //         .then((userCredential) => {
    //             const userInfo = userCredential.user;
    //             // console.log(userInfo)
    //             takeProfileNameAndPhotoURL(name, photoURL)
    //                 .then(() => {

    //                 }).catch((error) => {
    //                     toast.error(error)
    //                 });

    //             setUser(userInfo);
    //             Swal.fire({
    //                 // position: "top-end",
    //                 icon: "success",
    //                 title: "Registration Successful. Please Login",
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //             navigate('/login');
    //         })
    //         .catch((error) => {
    //             toast.error(error.message);
    //             // ..
    //         });
    // }




    return (
        <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
            <h2 className="text-2xl font-medium mb-4">Survey</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name"
                        className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
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
                    <label className="block text-gray-700 font-medium mb-2">What is your favorite color?</label>
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/3">
                            <label className="block text-gray-700 font-medium mb-2">
                                <input type="radio" id="color-red" name="color" value="red" className="mr-2" />Red
                            </label>
                        </div>
                        <div className="px-2 w-1/3">
                            <label className="block text-gray-700 font-medium mb-2">
                                <input type="radio" id="color-blue" name="color" value="blue" className="mr-2" />Blue
                            </label>
                        </div>
                        <div className="px-2 w-1/3">
                            <label className="block text-gray-700 font-medium mb-2">
                                <input type="radio" id="color-green" name="color" value="green" className="mr-2" />Green
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">What is your favorite animal?</label>
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/3">
                            <label className="block text-gray-700 font-medium mb-2">
                                <input type="checkbox" id="animal-cat" name="animal[]" value="cat" className="mr-2" />Cat
                            </label>
                        </div>
                        <div className="px-2 w-1/3">
                            <label className="block text-gray-700 font-medium mb-2">
                                <input type="checkbox" id="" name="animal[]" value="dog"
                                    className="mr-2" />Dog
                            </label>
                        </div>
                        <div className="px-2 w-1/3">
                            <label className="block text-gray-700 font-medium mb-2">
                                <input type="checkbox" id="animal-bird" name="animal[]" value="bird" className="mr-2" />Bird
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" name="message"
                        className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows="5"></textarea>
                </div>
                <div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default RegisterPage;