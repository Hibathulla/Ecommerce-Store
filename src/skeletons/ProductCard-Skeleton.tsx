import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white group cursor-pointer transition translate-y-0 hover:-translate-y-1 active:translate-y-0 rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Skeleton className="aspect-square object-cover rounded-md" />

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
        <Skeleton width={"12rem"} />
        <Skeleton width={"4rem"} height={10} />
      </div>
      <Skeleton width={"6rem"} />
      {/* {discountPrice ? (
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
      )} */}
    </div>
  );
};

export default ProductCardSkeleton;
