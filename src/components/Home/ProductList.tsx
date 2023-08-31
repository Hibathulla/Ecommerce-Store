import React from "react";
import NoResults from "../common/no-results";
import ProductCard from "../common/product-card";

const ProductList: React.FC<{ title: string }> = ({ title }) => {
  let data = [];
  return (
    <div className="space-y-4 ">
      <h3 className="font-bold text-3xl">{title}</h3>
      {/* {data?.length === 0 && <NoResults />} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
