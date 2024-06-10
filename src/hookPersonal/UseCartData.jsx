import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import UseAuth from './UseAuth';

const UseCartData = () => {
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();

    const { data: cartData = [], refetch, isPending, error } = useQuery({
        queryKey: ['cartData', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allCartData?email=${user.email}`);
            return res.data;
        }
    })

    const totalPrice = cartData.reduce((total, item) => total + parseInt(item.testPrice), 0)

    const { data: allBookingCartData = [] } = useQuery({
        queryKey: ['allBookingCartData'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allCartData');
            return res.data;
        }
    })

    return { cartData, refetch, isPending, error, totalPrice, allBookingCartData };
    //const {cartData, refetch, totalPrice, isPending, error, allBookingCartData} = UseCartData();
};

export default UseCartData;