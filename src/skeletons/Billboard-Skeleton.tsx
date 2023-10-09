import React from "react";
import Skeleton from "react-loading-skeleton";

const BillboardSkeleton = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <Skeleton
        className={
          "rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        }
      />
    </div>
  );
};

export default BillboardSkeleton;
