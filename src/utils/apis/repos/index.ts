import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IRepos, IReposParams } from "./types";
import type { QueryOpt } from "@/utils/types/api";

export const useGetReposByUsername = (
  { username, ...params }: IReposParams,
  opt?: Omit<QueryOpt<IRepos[]>, "queryKey" | "queryFn">
) =>
  useQuery({
    queryKey: ["FETCH_REPOS", username, params],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
          params,
        }
      );

      return response?.data;
    },
    ...opt,
  });

export { type IRepos, type IReposParams };
