"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Button from "../ui/Button";
import { cn } from "@/lib/cn";

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">Sizes</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <Button
            className={cn(
              "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300"
            )}
          >
            Large
          </Button>
          <Button
            className={cn(
              "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300"
            )}
          >
            Medium
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
