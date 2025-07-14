import type { UseQueryOptions } from "@tanstack/react-query";

export interface IResponsePagination<TData> {
  total_count: number;
  incomplete_results: boolean;
  items: TData[];
}

export type ApiServiceErr = unknown;
export type QueryOpt<TResponse = any> = UseQueryOptions<
  TResponse,
  ApiServiceErr,
  TResponse,
  any[]
>;
