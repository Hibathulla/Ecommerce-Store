"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useGetSingleCategory } from "../../../services/category";
import Billboard from "../../../components/Home/Billboard";
import { SingleDataCategory } from "../../../types/category";
import CategorySection from "../../../components/category/CategorySection";

const CategoryPage = () => {
  const [categoryName, setCategoryName] = useState("");
  const searchParams = useSearchParams();

  const slug = searchParams.get("slug");
  const categoryId = searchParams.get("id");

  useEffect(() => {
    setCategoryName(slug as string);
  }, [slug]);

  console.log(slug, categoryId, "search");

  const { data } = useGetSingleCategory(categoryId as string);

  console.log(data, "data");

  if (data && slug) {
    return (
      <div className="mx-auto bg-white">
        <div className="">
          <Billboard
            type={"category"}
            className="md:aspect-[2.4/.7]"
            details={data?.category as SingleDataCategory["category"]}
          />
        </div>

        <CategorySection category={categoryName} />
      </div>
    );
  }
  return null;
};

export default CategoryPage;
