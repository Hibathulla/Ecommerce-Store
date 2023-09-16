import Billboard from "@/components/Home/Billboard";
import ProductList from "@/components/Home/ProductList";
import Container from "@/components/ui/Container";
import { Metadata } from "next";
import React from "react";

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

const HomePage = async () => {
  const { data: settingsData } = await getSettings();
  const { data: productsData } = await getProducts();

  // console.log(productsData, "product");

  return (
    <Container>
      <div className="pb-10">
        <Billboard details={settingsData?.settings?.[0]} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList
            title="Featured Products"
            products={productsData?.product}
          />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
