"use client";
import React, { useState } from "react";
import { formatter } from "../../lib/formatter";
import Button from "../ui/Button";
import useCart from "../../hooks/use-cart";
import CouponForm from "./CouponForm";

const CartSummary = () => {
  const cart = useCart();
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center  justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <div className="font-bold text-xl">
            {formatter.format(cart?.totalPrice)}
          </div>
        </div>
        {cart.coupon != 0 && (
          <div className="flex items-center  justify-between border-t border-gray-200 pt-4">
            <div className="text-sm font-medium text-gray-900">
              Coupon Discount
            </div>
            <div className="font-bold text-base">
              -{formatter.format(cart.coupon)}
            </div>
          </div>
        )}
      </div>
      <div className="mt-5">
        <CouponForm />
      </div>
      <Button className="w-full mt-6">Checkout</Button>
    </div>
  );
};

export default CartSummary;
