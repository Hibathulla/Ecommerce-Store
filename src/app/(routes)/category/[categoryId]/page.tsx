import Billboard from "@/components/Home/Billboard";
import Filter from "@/components/category/Filter";
import MobileFilter from "@/components/category/MobileFilter";
import NoResults from "@/components/common/no-results";
import ProductCard from "@/components/common/product-card";
import React from "react";

const CategoryPage = () => {
  let products = [];
  return (
    <div className="mx-auto bg-white">
      <div className="">
        <Billboard className="md:aspect-[2.4/.7]" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          {/* Add mobile filters */}
          <MobileFilter />
          <div className="hidden lg:block">
            <Filter />
            <Filter />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {/* {products?.length === 0 && <NoResults />} */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
