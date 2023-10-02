import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-config";
import { routes } from "./routes";
import { ProductProps } from "../types/product";

const getProduct = async (params: {
  category: string;
}): Promise<ProductProps["data"]> => {
  const { data } = await axiosInstance.get(routes?.product, {
    params: { category: params?.category },
  });
  return data?.data;
};

export const useGetProduct = (params: { category: string }) => {
  return useQuery(["product"], () => getProduct(params));
};
