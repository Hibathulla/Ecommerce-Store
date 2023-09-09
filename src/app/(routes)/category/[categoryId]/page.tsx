import Billboard from "@/components/Home/Billboard";
import Filter from "@/components/category/Filter";
import MobileFilter from "@/components/category/MobileFilter";
import NoResults from "@/components/common/no-results";
import ProductCard from "@/components/common/product-card";
import React from "react";
import { SingleCategoryProps } from "../../../../types/category";
import { ProductProps } from "../../../../types/product";
import PriceFilter from "../../../../components/category/PriceFilter";
import CategorySection from "../../../../components/category/CategorySection";

const getCategory = async (
  categoryId: string
): Promise<SingleCategoryProps> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category/${categoryId}`
  );

  return res.json();
};

const getProducts = async (): Promise<ProductProps> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product`
  );

  return (await res).json();
};

const CategoryPage: React.FC<{ params: { categoryId: string } }> = async ({
  params,
}) => {
  const category = await getCategory(params?.categoryId);
  const product = await getProducts();

  const categoryProduct = product?.data?.product?.filter(
    (el) => el.category?.category === category?.data?.category?.category
  );

  return (
    <div className="mx-auto bg-white">
      <div className="">
        <Billboard
          className="md:aspect-[2.4/.7]"
          details={category.data.category}
        />
      </div>

      <CategorySection product={categoryProduct} />
    </div>
  );
};

export default CategoryPage;
