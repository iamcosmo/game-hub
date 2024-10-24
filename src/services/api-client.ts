import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string|null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "10afe40d0f8745c5b36195af6c62769c",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig)=> {
    const res = await axiosInstance
          .get<FetchResponse<T>>(this.endpoint, config);
      return res.data;
  }
}

export default APIClient;
