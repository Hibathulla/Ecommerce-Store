import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-config";
import { routes } from "./routes";

const getOrder = async (id: string) => {
  const { data } = await axiosInstance.get(`${routes.order}/${id}`);
  return data;
};

export const useGetSingleOrder = (id: string) => {
  return useQuery(["order"], () => getOrder(id), {
    enabled: !!id,
  });
};
