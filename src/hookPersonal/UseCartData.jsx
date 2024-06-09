import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import UseAuth from './UseAuth';

const UseCartData = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();

    const { data: cartData = [], refetch } = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allCartData?email=${user.email}`);
            return res.data;
        }
    })
    return { cartData, refetch }; //const {cartData, refetch} = UseCartData();
};

export default UseCartData;