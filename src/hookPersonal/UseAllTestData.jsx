import {
    useQuery,
} from '@tanstack/react-query'
import axios from "axios";

const UseAllTestData = () => {

    const { data: allTest = [], refetch } = useQuery({
        queryKey: ['allTest'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/testData');
            return res.data;
        }
    })
    return [allTest, refetch];


};

export default UseAllTestData;