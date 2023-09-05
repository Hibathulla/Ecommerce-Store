import React from "react";
import Login from "@/components/login";

const getSettings = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/settings`
  );

  return (await res).json();
};

const LoginPage = async () => {
  const { data } = await getSettings();

  console.log(data?.settings?.[0], "data");

  return <Login details={data?.settings?.[0]} />;
};

export default LoginPage;
