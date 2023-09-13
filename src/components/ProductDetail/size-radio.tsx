"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { cn } from "@/lib/cn";
import { SizeType } from "../../types/size";

interface sizeProps {
  sizes: SizeType[] | string;
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}

const SizesRadio: React.FC<sizeProps> = ({ sizes, size, setSize }) => {
  return (
    <RadioGroup value={size} onChange={setSize}>
      {/* <RadioGroup.Label>Plan</RadioGroup.Label> */}
      <div className="flex group items-center border divide-x-2 p-2 divide rounded-md">
        {(sizes as SizeType[])?.map((size) => {
          return (
            <RadioGroup.Option key={size?.id} value={size?.name}>
              {({ checked }) => (
                <span
                  className={cn(
                    "font-semibold cursor-pointer mx-1 rounded-md px-2 py-1",
                    checked ? "bg-black/90 text-white" : "bg-none"
                  )}
                >
                  {size?.name}
                </span>
              )}
            </RadioGroup.Option>
          );
        })}

        {/* <RadioGroup.Option value="business">
          {({ checked }) => (
            <span className={checked ? "bg-blue-200" : ""}>Business</span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option value="enterprise">
          {({ checked }) => (
            <span className={checked ? "bg-blue-200" : ""}>Enterprise</span>
          )}
        </RadioGroup.Option> */}
      </div>
    </RadioGroup>
  );
};

export default SizesRadio;
