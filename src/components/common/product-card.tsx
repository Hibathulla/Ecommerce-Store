"use client";
import Image from "next/image";
import React from "react";
import { formatter } from "@/lib/formatter";
import { productType } from "../../types/product";
import { useRouter } from "next/navigation";

interface productProps {
  product: productType;
}

const ProductCard: React.FC<productProps> = ({ product }) => {
  const router = useRouter();
  const price = product?.price;
  const discountPrice = product?.discountPrice;

  const image = `${process.env.NEXT_PUBLIC_API_BASE_URL}/img/products/${product?.images?.[0]}`;
  return (
    <div
      onClick={() => router.push(`/product/${product?.id}`)}
      className="bg-white group cursor-pointer transition translate-y-0 hover:-translate-y-1 active:translate-y-0 rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={image}
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
        <p className="font-bold text-lg">{product?.name}</p>
        <p className="text-gray-500 text-sm">{product?.category}</p>
      </div>
      {discountPrice ? (
        <div className="font-semibold flex items-center gap-3">
          {formatter.format(discountPrice)}{" "}
          <span className="text-gray-400 text-sm line-through">
            {formatter.format(price)}
          </span>
        </div>
      ) : (
        <div className="font-semibold flex items-center gap-3">
          {formatter.format(price)}{" "}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
