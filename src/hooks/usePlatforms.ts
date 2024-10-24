import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
const apiClient = new APIClient<Platforms>('/platforms/lists/parents')

export interface Platforms{
    id: number;
    name: string;
    slug: string;
}
const usePlatforms = ()=> useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: { count: platforms.length, results: platforms,next:null }
});
export default usePlatforms;