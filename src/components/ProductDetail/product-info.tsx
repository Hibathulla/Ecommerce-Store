import { formatter } from "@/lib/formatter";
import React from "react";
import { RadioGroup } from "@headlessui/react";
import SizesRadio from "./size-radio";
import Button from "../ui/Button";
import { ShoppingCart } from "lucide-react";

const sizes = [
  { id: "31e", value: "sm", name: "Small" },
  { id: "331", value: "lg", name: "Large" },
  { id: "432", value: "md", name: "Medium" },
];

const ProductInfo = () => {
  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold text-gray-900">Blue shirt</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-semibold flex items-center gap-3">
          {formatter.format(365)}{" "}
          <span className="text-gray-400 text-sm line-through">
            {formatter.format(365)}
          </span>
        </p>
      </div>
      <hr className="my-4" />

      <div className="flex items-center gap-x-4 mb-5">
        <h3 className="font-semibold text-black">Category:</h3>
        <div className="font-medium">Shirts</div>
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="font-semibold text-black">Size:</h3>
        <SizesRadio sizes={sizes} />
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add to cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
