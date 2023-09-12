"use client";
import React from "react";
import { useGetSingleOrder } from "../../../../services/order";
import { formatter } from "../../../../lib/formatter";
import CartItem from "../../../../components/cart/CartItem";

interface Props {
  params: {
    orderId: string;
  };
}

const SingleOrderPage: React.FC<Props> = ({ params }) => {
  const { data } = useGetSingleOrder(params?.orderId);

  console.log(data, "data");

  return (
    <div className="w-full h-full lg:h-screen flex justify-center items-center py-10">
      <div className="w-[90%] lg:w-1/2 h-full mx-auto bg-[#f5f5f5] border-2 rounded-xl border-gray-300 flex flex-col py-14 px-10 justify-start items-center lg:max-w-[500px]">
        <div className="mb-8">
          <h1 className="text-2xl text-[#060606] font-semibold self-start">
            Order Successfull <span className="text-green-500">✔</span>
          </h1>
        </div>

        {/* <RegisterForm /> */}
        {/* <ProfileForm initialData={data?.user} /> */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="border-2 rounded-xl border-gray-300 p-3">
            <div className="text-neutral-800 font-semibold text-lg">
              Order no
            </div>
            <p className="font-semibold text-neutral-500 text-sm">
              {data?.data?.order?.orderId}
            </p>
          </div>
          <div className="border-2 rounded-xl border-gray-300 p-3">
            <div className="text-neutral-800 font-semibold text-lg">Status</div>
            <p className="font-semibold text-neutral-500 text-sm">
              {data?.data?.order?.status}
            </p>
          </div>
          <div className="border-2 rounded-xl border-gray-300 p-3">
            <div className="text-neutral-800 font-semibold text-lg">
              Payment method
            </div>
            <p className="font-semibold text-neutral-500 text-sm">Razorpay</p>
          </div>
          <div className="border-2 rounded-xl border-gray-300 p-3">
            <div className="text-neutral-800 font-semibold text-lg">
              Order total
            </div>
            <p className="font-semibold text-neutral-500 text-sm">
              {formatter.format(data?.data?.order?.total)}
            </p>
          </div>
          {/* <div className="border-2 rounded-xl border-gray-300">test</div>
          <div className="border-2 rounded-xl border-gray-300">test</div> */}
        </div>
        <div className="w-full bg-red-500">
          {data?.data?.order?.products?.map((product: any) => {
            return <CartItem key={product?.id} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleOrderPage;
