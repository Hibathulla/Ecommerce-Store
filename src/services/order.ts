import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-config";
import { routes } from "./routes";
import { TOrder } from "../types/order";

const getOrder = async (userId: string): Promise<TOrder> => {
  const { data } = await axiosInstance.get(`${routes.users}/${userId}/order`);
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

export const useGetOrder = (userId: string) => {
  return useQuery(["order"], () => getOrder(userId));
};
