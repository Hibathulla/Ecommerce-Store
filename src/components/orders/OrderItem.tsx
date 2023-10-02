"use client";
import React from "react";
import { X } from "lucide-react";
import { productType } from "../../types/product";
import Image from "next/image";
import IconButton from "../ui/icon-button";
import useCart from "../../hooks/use-cart";
import { formatter } from "../../lib/formatter";

interface Props {
  data: productType;
}

const OrderItem: React.FC<Props> = ({ data }) => {
  const cart = useCart();
  const image = `${process.env.NEXT_PUBLIC_API_BASE_URL}/img/products/${data?.images?.[0]}`;
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-28 sm:w-28">
        <Image
          fill
          src={image}
          alt={data?.name || "product"}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col jusitfy-between sm:ml-6">
        <div className="relative pr-9 sm:flex sm:pr-6">
          <div className="flex justify-between scroll w-full">
            <p className="text-lg font-semibold text-black">{data?.name}</p>

            <div className="mt-1 flex text-sm">
              <p className="text-gray-500 font-semibold">{data?.category}</p>
              <p className="text-gray-500 ml-4 font-semibold border-l-2 border-gray-200 pl-4">
                {data?.size as string}
              </p>
            </div>
          </div>
        </div>
        {data?.discountPrice ? (
          <div className="font-semibold flex items-center gap-3">
            {formatter.format(data?.discountPrice)}
          </div>
        ) : (
          <div className="font-semibold flex items-center gap-3">
            {formatter.format(data?.price)}{" "}
          </div>
        )}
      </div>
    </li>
  );
};

export default OrderItem;
