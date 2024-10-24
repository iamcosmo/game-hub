import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genre from "../data/genre";
import ms from "ms";


const apiClient = new APIClient<Genre>('/genres')

export interface Genre{ 
    id: number;
    name: string;
    image_background: string;
}


const useGenres = ()=> useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), 
    initialData: { count: genre.length, results: genre,next: null }
}) 

export default useGenres;