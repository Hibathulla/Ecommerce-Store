"use client";
import React, { useState } from "react";
import { useGetProduct } from "../../services/product";
import MobileFilter from "./MobileFilter";
import NoResults from "../common/no-results";
import ProductCard from "../common/product-card";
import Filter from "./Filter";
import ProductListSkeleton from "../../skeletons/ProductList-Skeleton";

const CategorySection: React.FC<{ category: string }> = ({ category }) => {
  const { data, isLoading: productLoader } = useGetProduct({ category });
  console.log(data, "data");

  //   const [filteredProduct, setFilteredProduct] =
  //     useState<productType[]>(product);

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-24">
      <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
        {/* Add mobile filters */}
        <MobileFilter />
        <div className="hidden lg:block">
          <Filter />
          {/* <PriceFilter /> */}
        </div>
        <div className="mt-6 lg:col-span-4 lg:mt-0">
          {data?.product?.length === 0 && <NoResults />}
          {productLoader ? (
            <ProductListSkeleton className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data?.product?.map((prod) => {
                return <ProductCard key={prod?.id} product={prod} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
