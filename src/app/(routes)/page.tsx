import Billboard from "@/components/Home/Billboard";
import ProductList from "@/components/Home/ProductList";
import Container from "@/components/ui/Container";
import React from "react";

const getSettings = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/settings`,
    { cache: "no-cache" }
  );

  return (await res).json();
};

const getProducts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product?isFeatured=true`,
    { cache: "no-store" }
  );

  return (await res).json();
};

const HomePage = async () => {
  const { data: settingsData } = await getSettings();
  const { data: productsData } = await getProducts();

  console.log(productsData, "product");

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
