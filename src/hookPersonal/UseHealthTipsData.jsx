import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const UseHealthTipsData = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allHealthTips = [], refetch, isPending, error } = useQuery({
        queryKey: ['allHealthTips'],
        queryFn: async () => {
            const res = await axiosSecure.get('/healthTipsAndPromotionsAllData');
            return res.data;
        }
    })

    return { allHealthTips, refetch, isPending, error };
    // const { allHealthTips, refetch, isPending, error } = UseHealthTipsData;
};

export default UseHealthTipsData;