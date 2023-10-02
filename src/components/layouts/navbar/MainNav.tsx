"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { categoryType } from "@/types/category";
import { useGetAllCategroy } from "../../../services/category";
import CategoryButton from "./CategoryButton";

interface CategoryProps {
  href: string;
  label: string;
  active: boolean;
}

const MainNav = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const slug = searchParams.get("slug");

  const { data } = useGetAllCategroy();

  console.log(pathname, "pathname");

  const routes: CategoryProps[] | undefined = data?.data?.category?.map(
    (route: any) => {
      return {
        href: `/category?slug=${route.slug}&id=${route?.id}`,
        label: route?.category,
        active: slug === route?.slug,
      };
    }
  );
  return (
    <div>
      <CategoryButton routes={routes as CategoryProps[]} />
      {/* <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
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
      </nav> */}
    </div>
  );
};

export default MainNav;
