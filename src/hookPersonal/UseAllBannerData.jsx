import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';


const UseAllBannerData = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allBanner = [], refetch } = useQuery({
        queryKey: ['allBanner'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bannerData');
            return res.data;
        }
    })

    return [allBanner, refetch]
};

export default UseAllBannerData;