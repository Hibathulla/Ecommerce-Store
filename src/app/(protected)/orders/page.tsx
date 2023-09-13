"use client";
import React, { useEffect, useState } from "react";
import { useGetOrder } from "../../../services/order";
import OrderCard from "../../../components/orders/OrderCard";
import { TOrder } from "../../../types/order";

const USerOrderPage = () => {
  const [hydrate, setHydrate] = useState(false);
  const { data } = useGetOrder();
  console.log(data, "data");
  useEffect(() => {
    setHydrate(true);
  }, []);

  if (!hydrate) return null;

  if (data) {
    return (
      <div className="h-screen p-8">
        <h2 className="text-3xl font-bold">My orders</h2>
        <div className="grid grid-cols-4 mt-6 gap-6">
          {data?.order?.map((el) => {
            return <OrderCard key={el?._id} order={el} />;
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default USerOrderPage;
