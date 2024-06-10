import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://b9a12-server-side-rho.vercel.app',
    // baseURL: 'http://localhost:5000',
});


const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;