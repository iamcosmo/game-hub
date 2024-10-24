import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genre from "../data/genre";


const apiClient = new APIClient<Genre>('/genres')

export interface Genre{ 
    id: number;
    name: string;
    image_background: string;
}


const useGenres = ()=> useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 1000*60*60*24, //24 hours
    initialData: { count: genre.length, results: genre }
}) 

export default useGenres;