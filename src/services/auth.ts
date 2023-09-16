import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-config";
import { routes } from "./routes";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/use-auth";
import { UserData } from "../types/user";

interface loginType {
  email: string;
  password: string;
}

const postLogin = async (val: loginType): Promise<UserData> => {
  console.log(val, "val");

  const { data } = await axiosInstance.post(routes.login, val);
  return data;
};

const postRegister = async (val: loginType): Promise<UserData> => {
  console.log(val, "val");

  const { data } = await axiosInstance.post(routes.register, val);
  return data;
};

const postPasswordUpdate = (val: {
  currentPassword: string;
  password: string;
}) => {
  return axiosInstance.post(routes.updatePassword, val);
};

export const useLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");
  const { setAuth, setUser } = useAuth();

  console.log(returnUrl, "return");

  return useMutation(postLogin, {
    onSuccess: (res) => {
      if (res.data.user.role === "admin") {
        toast.error("Cannot login as admin");
        return;
      }
      console.log(res?.message, "res");
      const token = res.token;

      setAuth(token);
      setUser(res.data.user);
      toast.success(res?.message);
      if (returnUrl) {
        return router.push(returnUrl);
      }
      router.push("/");
    },
  });
};

export const useRegister = () => {
  const router = useRouter();
  const { setAuth, setUser } = useAuth();

  return useMutation(postRegister, {
    onSuccess: (res) => {
      console.log(res, "res");
      const token = res.token;
      // axiosInstance.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${token}`;
      // axiosInstance.defaults.headers.common["Accept"] = `application/json`;
      setAuth(token);
      setUser(res.data.user);

      toast.success(res?.message);
      router.push("/");
    },
  });
};

export const useUpdatePassword = () => {
  return useMutation(postPasswordUpdate, {
    onSuccess: (res) => {
      console.log(res, "res");

      toast.success(res?.data?.message);
    },
  });
};
