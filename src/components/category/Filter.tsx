"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Button from "../ui/Button";
import { cn } from "@/lib/cn";
import { useGetSize } from "../../services/size";
import { useGetAllCategroy } from "../../services/category";
import { CategoryProps } from "../../types/category";

const Filter: React.FC<{}> = () => {
  const { data } = useGetAllCategroy();
  const searchParams = useSearchParams();
  const router = useRouter();

  const slug = searchParams.get("slug");

  const routes = data?.data?.category?.map((route: any) => {
    return {
      href: `/category?slug=${route.slug}&id=${route?.id}`,
      label: route?.category,
      active: slug === route?.slug,
      slug: route?.slug,
      id: route?.id,
    };
  });

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">Categories</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          {routes?.map((el) => {
            console.log(el, "el");

            return (
              <Button
                onClick={() => {
                  router.push(el?.href);
                }}
                key={el?.label}
                className={cn(
                  "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                  {
                    "bg-black text-white": !!el?.active,
                  }
                )}
              >
                {el?.label}
              </Button>
            );
          })}

          {/* <Button
            className={cn(
              "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300"
            )}
          >
            Medium
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Filter;
