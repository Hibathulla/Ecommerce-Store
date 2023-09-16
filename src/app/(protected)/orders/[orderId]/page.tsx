"use client";
import React from "react";
import { useGetSingleOrder } from "../../../../services/order";
import { formatter } from "../../../../lib/formatter";
import CartItem from "../../../../components/cart/CartItem";
import OrderItem from "../../../../components/orders/OrderItem";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../../hooks/use-auth";

interface Props {
  params: {
    orderId: string;
  };
}

const SingleOrderPage: React.FC<Props> = ({ params }) => {
  const { user } = useAuth();
  const { data } = useGetSingleOrder(params?.orderId);
  const router = useRouter();

  console.log(data, "data");

  return (
    <div className="w-full h-full flex justify-center items-center py-10">
      <div className="w-[90%] lg:w-1/2 h-full mx-auto bg-[#f5f5f5] border-2 rounded-xl border-gray-300 flex flex-col py-14 px-10 justify-start items-center lg:max-w-[500px]">
        <div className="mb-8 flex items-center w-full">
          <button
            onClick={() => router.back()}
            className="mr-auto hover:bg-gray-500/20 rounded-full w-9 h-9 flex items-center justify-center"
          >
            <ChevronLeft size={25} />
          </button>
          <h1 className="text-2xl mr-auto text-[#060606] font-semibold self-start">
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
        <div className="w-full h-[20rem] overflow-y-auto divide divide-y">
          {data?.data?.order?.products?.map((product: any) => {
            return <OrderItem key={product?.id} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleOrderPage;
