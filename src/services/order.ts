import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-config";
import { routes } from "./routes";
import { TOrder } from "../types/order";

const getOrder = async (): Promise<TOrder> => {
  const { data } = await axiosInstance.get(`${routes.order}`);
  return data?.data;
};

const getSingleOrder = async (id: string) => {
  const { data } = await axiosInstance.get(`${routes.order}/${id}`);
  return data;
};

export const useGetSingleOrder = (id: string) => {
  return useQuery(["order", id], () => getSingleOrder(id), {
    enabled: !!id,
  });
};

export const useGetOrder = () => {
  return useQuery(["order"], () => getOrder());
};
