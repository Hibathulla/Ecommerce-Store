"use client";
import React, { MouseEventHandler, useState } from "react";
import Button from "../ui/Button";
import { useGetSingleCoupon, useVerifyCoupon } from "../../services/coupon";
import useCart from "../../hooks/use-cart";
import { AxiosError } from "axios";

type Inputs = {
  couponCode: string;
};

const CouponForm = () => {
  const [code, setCode] = useState("");
  const [success, setSuccess] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const cart = useCart();

  const { mutate, error, isError, isLoading } = useVerifyCoupon();

  const submitHandler = (e: any) => {
    e.preventDefault();
    mutate(
      { couponCode: code },
      {
        onSuccess: (res) => {
          console.log(res, "res");
          setSuccess(res?.message);
          setErrMessage("");
          if (cart.coupon === 0) {
            cart?.setTotalPrice(
              res?.data?.doc?.value,
              res?.data?.doc?.discountType
            );
          } else {
            setErrMessage("Coupon already applied");
            setSuccess("");
          }
        },
        onError: (err) => {
          const er: any = (err as any)?.response?.data!;
          const errMessage = er?.message;
          setErrMessage(errMessage);
          setSuccess("");
          console.log(errMessage, "errrr");

          console.log(err, "err");
        },
      }
    );
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        action=""
        className="flex items-center justify-between gap-4"
      >
        <input
          onChange={(e) => setCode(e.target.value)}
          className="bg-gray-200 py-2 px-4 rounded-2xl w-full outline-none"
          placeholder="Enter a coupon code"
        />

        <Button>Submit</Button>
      </form>
      {success?.length != 0 && (
        <div className="text-emerald-400 text-sm font-semibold">{success}</div>
      )}
      {errMessage?.length != 0 && (
        <div className="text-red-400 text-sm font-semibold">{errMessage}</div>
      )}
    </div>
  );
};

export default CouponForm;
