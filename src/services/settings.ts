import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../axios-config";
import { routes } from "./routes";

const getSettingsFunction = async () => {
  const { data } = await axiosInstance.get(
    `${routes?.settings}/64f591c66c13180f873b9074`
  );

  return data?.data;
};

export const useSettingClick = () => {
  return useQuery(["settings"], getSettingsFunction);
};
