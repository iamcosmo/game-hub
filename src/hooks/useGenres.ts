import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from './useData';
import genre from "../data/genre";


export interface Genre{
    id: number;
    name: string;
    image_background: string;
}


const useGenres = ()=> useQuery({
    queryKey: ['genres'],
    queryFn: async ()=>{
        
        const res = await apiClient.get<FetchResponse<Genre>>('/genres');
        return res.data;
    },
    staleTime: 1000*60*60*24, //24 hours
    initialData: { count: genre.length, results: genre }
}) 

export default useGenres;