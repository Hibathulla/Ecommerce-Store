"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { categoryType } from "@/types/category";
import { useGetAllCategroy } from "../../../services/category";

const MainNav = () => {
  const pathname = usePathname();

  const { data } = useGetAllCategroy();

  console.log(data, "data");

  const routes = data?.data?.category?.map((route: any) => {
    return {
      href: `/category/${route.id}`,
      label: route?.category,
      active: pathname === `/category/${route?.id}`,
    };
  });
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes?.map((route: any) => {
        return (
          <Link
            key={route?.href}
            href={route?.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {route?.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNav;
