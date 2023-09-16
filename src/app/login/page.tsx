import React from "react";
import Login from "@/components/login";

const getSettings = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/settings`
    );

    return (await res).json();
  } catch (err) {
    console.log(err, "err");
  }
};

const LoginPage = async () => {
  const { data } = await getSettings();

  return <Login details={data?.settings?.[0]} />;
};

export default LoginPage;
