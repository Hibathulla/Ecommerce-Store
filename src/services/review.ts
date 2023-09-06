import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { routes } from "./routes";
import { axiosInstance } from "../../axios-config";

interface reviewType {
  rating: number;
  review: string;
  productId?: string;
}

const getReview = (productId: string) => {
  return axiosInstance.get(`/api/product/${productId}/review`);
};

const postReview = (val: reviewType) => {
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
  //   const queryClient = useQueryClient();
  return useMutation(postReview, {
    onSuccess: () => {
      //   queryClient.invalidateQueries(["review"]);
    },
  });
};
