"use client";
import React from "react";
import { TOrder } from "../../types/order";
import moment from "moment";
import { formatter } from "../../lib/formatter";
import { useRouter } from "next/navigation";

const OrderCard: React.FC<{ order: TOrder["order"][0] }> = ({ order }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/orders/${order?.id}`)}
      className="rounded-xl drop-shadow border-2 w-[18rem] p-4 transition translate-y-0 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
    >
      <div className="w-full flex flex-col">
        <div className="flex items-center gap-3">
          <div className="text-neutral-700 font-semibold text-lg">Status: </div>
          <span className="text-base font-medium text-neutral-500">
            {order?.status}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-neutral-700 font-semibold text-lg">Date: </div>
          <span className="text-sm font-medium text-neutral-500">
            {moment(order?.createdAt).format("DD-mm-yyyy")}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-neutral-700 font-semibold text-lg">
            Order id:{" "}
          </div>
          <span className="text-sm font-medium text-neutral-500">
            {order?.orderId}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-neutral-700 font-semibold text-lg">
            Total amount:{" "}
          </div>
          <span className="text-sm font-medium text-neutral-500">
            {formatter.format(order?.total)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
