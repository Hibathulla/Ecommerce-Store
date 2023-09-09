"use client";
import React from "react";
import useCart from "../../hooks/use-cart";
import CartItem from "./CartItem";

const CartItemView = () => {
  const cart = useCart();
  return (
    <div className="lg:col-span-7">
      {cart?.items?.length === 0 && (
        <p className="text-neutral-500 font-semibold">
          No items added to cart.
        </p>
      )}
      <ul>
        {cart?.items?.map((item) => {
          return <CartItem key={item?.id} data={item} />;
        })}
      </ul>
    </div>
  );
};

export default CartItemView;
