"use client";
import Billboard from "@/components/Home/Billboard";
import ProductList from "@/components/Home/ProductList";
import Container from "@/components/ui/Container";
import { Metadata } from "next";
import React from "react";
import ProductCardSkeleton from "../../skeletons/ProductCard-Skeleton";
import ProductListSkeleton from "../../skeletons/ProductList-Skeleton";
import { useGetProduct } from "../../services/product";
import { useSettings } from "../../services/settings";
import { productType } from "../../types/product";
import BillboardSkeleton from "../../skeletons/Billboard-Skeleton";

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

const getSettings = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/settings`,
      { cache: "no-cache" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return (await res).json();
  } catch (err) {
    console.log(err, "err");
  }
};

const getProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product?isFeatured=true`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return (await res).json();
  } catch (err) {
    console.log(err, "err");
  }
};

const HomePage = () => {
  // const { data: settingsData } = await getSettings();
  // const { data: productsData } = await getProducts();

  const { data: settingsData, isLoading: settingsLoader } = useSettings();

  const { data: productsData, isLoading: productLoader } = useGetProduct({
    featured: true,
  });

  // let loading = true;

  // if (loading) {
  //   return <BillboardSkeleton />;
  // }

  console.log(productsData, "product");

  return (
    <Container>
      <div className="pb-10">
        {settingsLoader ? (
          <BillboardSkeleton />
        ) : (
          <Billboard details={settingsData?.settings?.[0]} />
        )}

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {productLoader ? (
            <ProductListSkeleton className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" />
          ) : (
            <ProductList
              title="Featured Products"
              products={productsData?.product as productType[]}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
