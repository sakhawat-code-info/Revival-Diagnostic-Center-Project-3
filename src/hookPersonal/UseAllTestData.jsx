import {
    useQuery,
} from '@tanstack/react-query'
import axios from "axios";

const UseAllTestData = () => {
    const { data: allTest = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/testData');
            return res.data;
        }
    })
    return [allTest, loading, refetch];
};

export default UseAllTestData;