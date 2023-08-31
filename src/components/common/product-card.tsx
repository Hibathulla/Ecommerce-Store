"use client";
import Image from "next/image";
import React from "react";
import { formatter } from "@/lib/formatter";

const ProductCard = () => {
  return (
    <div className="bg-white group cursor-pointer transition translate-y-0 hover:-translate-y-1 active:translate-y-0 rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={"/fashion.jpg"}
          alt="product image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opactiy-0 group-hover:opacity-100 absolute w-full px-6 bottom-5">
          {/* <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
          </div> */}
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-bold text-lg">Black shirt</p>
        <p className="text-gray-500 text-sm">Shirts</p>
      </div>
      <div className="font-semibold flex items-center gap-3">
        {formatter.format(365)}{" "}
        <span className="text-gray-400 text-sm line-through">
          {formatter.format(365)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
