"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import { useAuth } from "../../hooks/use-auth";

const Protector = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { loggedIn } = useAuth();
  const protectedPaths = useMemo(
    () => ["/profile", "/update-password", "/cart"],
    []
  );
  console.log(protectedPaths.includes(pathname), "test");

  useEffect(() => {
    if (!loggedIn) {
      router.replace(`/login?returnUrl=${pathname}`);
    }
  }, [loggedIn, pathname, router]);

  return <div>{children}</div>;
};

export default Protector;
