import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platforms{
    id: number;
    name: string;
    slug: string;
}
const usePlatforms = ()=> useQuery({
    queryKey: ['platforms'],
    queryFn: async ()=>{
        const res = await apiClient.get<FetchResponse<Platforms>>('/platforms/lists/parents');
        return res.data;
    },
    staleTime: 1000*60*60*24, //24 hours
    initialData: { count: platforms.length, results: platforms }
});
export default usePlatforms;