import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";
import { routes } from "./routes";
import { axiosInstance } from "../../axios-config";
import { userType } from "../types/user";

const getLoggedUser = async () => {
  const { data } = await axiosInstance.get(routes?.loggedUser);
  return data?.data;
};

const updateLoggedUser = async (val: userType) => {
  const { data } = await axiosInstance.patch(routes?.updateLoggedUser, val);
  return data;
};

export const useGetLoggedUser = () => {
  let token: string = "";
  if (typeof window != undefined) {
    token = localStorage.getItem("token") as string;
  }
  return useQuery([routes?.loggedUser], getLoggedUser, {
    enabled: !!token,
  });
};

export const useUpdateLoggedUser = () => {
  const queryClient = useQueryClient();
  return useMutation(updateLoggedUser, {
    onSuccess: () => {
      queryClient.invalidateQueries([routes?.loggedUser]);
    },
  });
};
