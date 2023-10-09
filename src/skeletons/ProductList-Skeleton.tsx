import React from "react";
import ProductCardSkeleton from "./ProductCard-Skeleton";
import { cn } from "../lib/cn";

const ProductListSkeleton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={cn(className)}>
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
  );
};

export default ProductListSkeleton;
