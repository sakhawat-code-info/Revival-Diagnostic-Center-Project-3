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
    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return [allBanner, refetch]
};

export default UseAllBannerData;