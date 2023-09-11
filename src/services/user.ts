import {
  useMutation,
  useQuery,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";
import { routes } from "./routes";
import { axiosInstance } from "../../axios-config";
import { UserApi, userType } from "../types/user";
import { useAuth } from "../hooks/use-auth";

const getLoggedUser = async (): Promise<UserApi["data"]> => {
  const { data } = await axiosInstance.get(routes?.loggedUser);
  return data?.data;
};

const updateLoggedUser = async (val: userType) => {
  const { data } = await axiosInstance.patch(routes?.updateLoggedUser, val);
  return data;
};

export const useGetLoggedUser = () => {
  const { loggedIn } = useAuth();
  return useQuery([routes?.loggedUser], getLoggedUser, {
    enabled: !!loggedIn,
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
