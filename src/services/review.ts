import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { routes } from "./routes";
import { axiosInstance } from "../../axios-config";
import { reviewType } from "../types/review";

interface reviewPost {
  rating: number;
  review: string;
  productId?: string;
}

const getReview = async (productId: string): Promise<reviewType> => {
  const { data } = await axiosInstance.get(
    `/api/product/${productId}/review?sort=-createdAt`
  );
  return data;
};

const postReview = (val: reviewPost) => {
  const data = { ...val };
  delete data?.productId;
  return axiosInstance.post(`/api/product/${val?.productId}/review`, data);
};

// const updateLoggedUser = async (val: reviewType) => {
//   const { data } = await axiosInstance.patch(routes?.updateLoggedUser, val);
//   return data;
// };

export const useGetProductReview = (productId: string) => {
  let token: string = "";
  if (typeof window != undefined) {
    token = localStorage.getItem("token") as string;
  }
  return useQuery(["review"], () => getReview(productId), {
    enabled: !!token && !!productId,
  });
};

export const usePostReview = () => {
  const queryClient = useQueryClient();
  return useMutation(postReview, {
    onSuccess: () => {
      queryClient.invalidateQueries(["review"]);
    },
  });
};
