import React from "react";
import Register from "@/components/register";

const getSettings = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/settings`
  );

  return (await res).json();
};

const RegisterPage = async () => {
  const { data } = await getSettings();
  return <Register details={data?.settings?.[0]} />;
};

export default RegisterPage;
