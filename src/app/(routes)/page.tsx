import Billboard from "@/components/Home/Billboard";
import ProductList from "@/components/Home/ProductList";
import Container from "@/components/ui/Container";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <div className="pb-10">
        <Billboard />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
