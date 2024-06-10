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

    return { cartData, refetch, isPending, error, totalPrice }; //const {cartData, refetch, totalPrice, isPending, error} = UseCartData();
};

export default UseCartData;