import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";
import ms from "ms";
import { Platforms } from "../entities/Platforms";
const apiClient = new APIClient<Platforms>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: { count: platforms.length, results: platforms, next: null },
  });
export default usePlatforms;
