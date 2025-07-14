import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IUsers, IUsersParams } from "./types";
import type { IResponsePagination, QueryOpt } from "@/utils/types/api";

export const useGetUsers = (
  params: IUsersParams,
  opt?: Omit<QueryOpt<IResponsePagination<IUsers>>, "queryKey" | "queryFn">
) =>
  useQuery({
    queryKey: ["FETCH_USERS", params],
    queryFn: async () => {
      const response = await axios.get("https://api.github.com/search/users", {
        headers: {
          Accept: "application/vnd.github+json",
        },
        params,
      });

      return response?.data;
    },
    ...opt,
  });

export { type IUsers, type IUsersParams };
