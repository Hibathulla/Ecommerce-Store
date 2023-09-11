import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-config";
import { routes } from "./routes";

const postPayment = async (val: { amount: number }) => {
  const { data } = await axiosInstance.post(routes.payment, val);
  return data;
};

const postVerify = async (val: any) => {
  const { data } = await axiosInstance.post(routes.payment + "/verify", val);
  return data;
};

export const useHandlePayment = () => {
  return useMutation(postPayment);
};

export const useVerifyPayment = () => {
  return useMutation(postVerify);
};
