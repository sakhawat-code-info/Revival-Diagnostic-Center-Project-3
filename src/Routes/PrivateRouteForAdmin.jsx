import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import UseAuth from '../hookPersonal/UseAuth';
import useAxiosSecure from '../hookPersonal/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PrivateRouteForAdmin = ({ children }) => {
    const { user, loader } = UseAuth();


    const axiosSecure = useAxiosSecure();

    const { isPending, error, data: allAdmin = [] } = useQuery({
        queryKey: ['allAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allUsers');
            return res.data;
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const admin = allAdmin.find(item => item.role === "admin" && item.email === user.email)

    if (loader) {
        return <>
            <div className='flex items-center justify-center'>
                <div id="loading-overlay" className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60">

                    <svg className="animate-spin h-8 w-8 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" ></circle>
                        <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>

                    <span className="text-white text-3xl font-bold">Loading...</span>

                </div>
            </div>
        </>
    }

    if (admin) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>;
};
PrivateRouteForAdmin.propTypes = {
    children: PropTypes.node
};

export default PrivateRouteForAdmin;