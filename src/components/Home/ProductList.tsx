import React from "react";
import NoResults from "../common/no-results";
import ProductCard from "../common/product-card";
import { productType } from "../../types/product";

interface Props {
  title: string;
  products: productType[];
}

const ProductList: React.FC<Props> = ({ title, products }) => {
  console.log(products, "product");

  return (
    <div className="space-y-4 ">
      <h3 className="font-bold text-3xl">{title}</h3>
      {/* {data?.length === 0 && <NoResults />} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}

        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  );
};

export default ProductList;
