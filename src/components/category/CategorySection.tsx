"use client";
import React, { useState } from "react";
import MobileFilter from "./MobileFilter";
import Filter from "./Filter";
import { productType } from "../../types/product";
import NoResults from "../common/no-results";
import ProductCard from "../common/product-card";
import PriceFilter from "./PriceFilter";

const CategorySection: React.FC<{ product: productType[] }> = ({ product }) => {
  const [size, setSize] = useState("");
  //   const [filteredProduct, setFilteredProduct] =
  //     useState<productType[]>(product);

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-24">
      <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
        {/* Add mobile filters */}
        <MobileFilter />
        <div className="hidden lg:block">
          {/* <Filter size={size} setSize={setSize} /> */}
          {/* <PriceFilter /> */}
        </div>
        <div className="mt-6 lg:col-span-4 lg:mt-0">
          {product?.length === 0 && <NoResults />}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {product?.map((prod) => {
              return <ProductCard key={prod?.id} product={prod} />;
            })}

            {/* <ProductCard />
          <ProductCard />
          <ProductCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
