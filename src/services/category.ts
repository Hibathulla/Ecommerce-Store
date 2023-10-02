import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { routes } from "./routes";
import { axiosInstance } from "../../axios-config";
import {
  CategoryProps,
  SingleDataCategory,
  categoryType,
} from "../types/category";

const get = async (): Promise<CategoryProps> => {
  const { data } = await axiosInstance.get(`/api/category`);
  return data;
};

const getSingle = async (id: string): Promise<SingleDataCategory> => {
  const { data } = await axiosInstance.get(`/api/category/${id}`);
  return data?.data;
};

export const useGetAllCategroy = () => {
  return useQuery(["category"], get, {
    refetchOnWindowFocus: true,
  });
};

export const useGetSingleCategory = (id: string) => {
  return useQuery(["single-category", id], () => getSingle(id));
};
