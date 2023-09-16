import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { routes } from "./routes";
import { axiosInstance } from "../../axios-config";
import { CategoryProps, categoryType } from "../types/category";

const getCategory = async (): Promise<CategoryProps> => {
  const { data } = await axiosInstance.get(`/api/category`);
  return data;
};

export const useGetAllCategroy = () => {
  return useQuery(["category"], getCategory, {
    refetchOnWindowFocus: true,
  });
};
