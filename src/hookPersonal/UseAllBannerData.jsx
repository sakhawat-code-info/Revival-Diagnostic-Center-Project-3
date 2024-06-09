import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';


const UseAllBannerData = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allBanner = [], refetch, isPending, error, } = useQuery({
        queryKey: ['allBanner'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bannerData');
            return res.data;
        }
    })
    const activeData = allBanner.find(item => item.bannerIsActive == 'true')

    return { allBanner, refetch, isPending, error, activeData }
};

export default UseAllBannerData;