import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const UseAllTestData = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allTest = [], refetch, isPending, error } = useQuery({
        queryKey: ['allTest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/testData');
            return res.data;
        }
    })
    return { allTest, refetch, isPending, error };


};

export default UseAllTestData;