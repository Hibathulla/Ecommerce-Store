"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import LoginForm from "../../components/login/LoginForm";

const Protector = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const protectedPaths = useMemo(() => ["/profile"], []);
  let token: string = "";
  if (typeof window != "undefined") {
    token = localStorage.getItem("token") as string;
  }

  useEffect(() => {
    if (!token && protectedPaths.includes(pathname)) {
      router.replace(`/login?returnUrl=${pathname}`);
    }
  }, [pathname, protectedPaths, router, token]);

  return <div>{children}</div>;
};

export default Protector;
