"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Button from "../ui/Button";
import { cn } from "@/lib/cn";
import { useGetSize } from "../../services/size";

const Filter: React.FC<{
  setSize: React.Dispatch<React.SetStateAction<string>>;
  size: string;
}> = ({ setSize, size }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data } = useGetSize();

  console.log(data, "size");

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">Sizes</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-3">
          {data?.size?.map((el) => {
            console.log(el, "el");

            return (
              <Button
                onClick={() => setSize(el?.value)}
                key={el?.id}
                className={cn(
                  "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300"
                )}
              >
                {el?.name}
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
