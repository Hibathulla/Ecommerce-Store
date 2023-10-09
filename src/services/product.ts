import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-config";
import { routes } from "./routes";
import { ProductProps } from "../types/product";

const getProduct = async (params?: {
  category?: string;
  featured?: boolean;
}): Promise<ProductProps["data"]> => {
  const { data } = await axiosInstance.get(routes?.product, {
    params: {
      ...(params?.category && { category: params?.category }),
      ...(params?.featured && { isFeatured: params?.featured }),
    },
  });
  return data?.data;
};

export const useGetProduct = (params?: {
  category?: string;
  featured?: boolean;
}) => {
  return useQuery(["product", params], () => getProduct(params));
};
