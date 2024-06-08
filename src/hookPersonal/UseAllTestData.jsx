import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';

const UseAllTestData = () => {

    const axiosSecure = useAxiosSecure();

    const { data: allTest = [], refetch } = useQuery({
        queryKey: ['allTest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/testData');
            return res.data;
        }
    })
    return [allTest, refetch];


};

export default UseAllTestData; ''