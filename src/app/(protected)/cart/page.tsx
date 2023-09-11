"use client";

import { useEffect, useState } from "react";
import CartItemView from "../../../components/cart/cart-item-view";
import CartSummary from "../../../components/cart/cart-summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white mx-auto overflow-y-auto h-screen">
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start ga-x-12">
          <CartItemView />
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
