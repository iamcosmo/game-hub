import { useInfiniteQuery} from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient,{ FetchResponse } from "../services/api-client";
import { Platforms } from "./usePlatforms";
import ms from "ms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam=1}) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page:pageParam
        },
      }),
      getNextPageParam: (lastPage,allPages)=>{
        return lastPage.next?allPages.length + 1:undefined;
      },
      staleTime:ms('24h'),
      initialPageParam:1
  });

export default useGames;
