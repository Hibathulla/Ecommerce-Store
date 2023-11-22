"use client";
import React, { useState } from "react";
import { formatter } from "../../lib/formatter";
import Button from "../ui/Button";
import useCart from "../../hooks/use-cart";
import CouponForm from "./CouponForm";
import Script from "next/script";
import { useHandlePayment, useVerifyPayment } from "../../services/payment";
import { useGetLoggedUser } from "../../services/user";
import { useRouter } from "next/navigation";

const CartSummary = () => {
  const cart = useCart();
  cart.coupon = cart.coupon;
  // const {} = useGetS
  const { mutate: createOrder } = useHandlePayment();
  const { mutate: verifyOrder } = useVerifyPayment();

  const router = useRouter();
  const { data } = useGetLoggedUser();
  console.log(cart.items?.length === 0, "data");

  const paymentHandler = () => {
    const productIds = cart.items?.map((item) => {
      return {
        id: item?.id,
        category: item?.category,
        size: item?.size,
        images: item?.images,
        description: item?.description,
        price: item?.price,
        name: item?.name,
      };
    });

    createOrder(
      { amount: cart.totalPrice },
      {
        onSuccess: (res) => {
          console.log(res, "res");

          var options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: res.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: res.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response: any) {
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature);

              verifyOrder(
                {
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  razorpaySignature: response.razorpay_signature,
                  status: "success",
                  isPaid: true,
                  discount: cart.coupon,
                  total: cart.totalPrice,
                  products: productIds,
                },
                {
                  onSuccess: (res) => {
                    console.log(res.data.orderData, "ressss");
                    cart.removeAll();
                    router.push(`/orders/${res.data.orderData.id}`);
                  },
                }
              );
            },
            prefill: {
              name: data?.user?.name,
              email: data?.user?.email,
            },

            theme: {
              color: "#121212",
            },
          };
          const razor = new (window as any).Razorpay(options);
          razor.open();
        },
      }
    );
  };
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

        <div className="mt-6 space-y-4">
          <div className="flex items-center  justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">
              Order total
            </div>
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
                {cart.discountType === "flat"
                  ? `-${formatter.format(cart.coupon)}`
                  : `-${cart.coupon}%`}
              </div>
            </div>
          )}
        </div>
        <div className="mt-5">
          <CouponForm />
        </div>
        <Button
          disabled={cart.items?.length === 0}
          onClick={paymentHandler}
          className="w-full mt-6 disabled:cursor-not-allowed"
        >
          Checkout
        </Button>
      </div>
    </>
  );
};

export default CartSummary;
