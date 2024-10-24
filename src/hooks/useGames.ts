import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";
import { Platforms } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platforms}[];
    metacritic: number;
    rating_top: number;
  }
 
  
const useGames = (gameQuery:GameQuery)=>

  useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games',gameQuery],
    queryFn: async ()=>{
        const res = await apiClient.get<FetchResponse<Game>>('/games',
        {params:
          { genres: gameQuery.genre?.id,
            parent_platforms:gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
          }});
        return res.data;
    }
  })

export default useGames;