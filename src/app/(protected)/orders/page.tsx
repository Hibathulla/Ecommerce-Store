"use client";
import React, { useEffect, useState } from "react";
import { useGetOrder } from "../../../services/order";
import OrderCard from "../../../components/orders/OrderCard";
import { TOrder } from "../../../types/order";
import { useAuth } from "../../../hooks/use-auth";

const USerOrderPage = () => {
  const [hydrate, setHydrate] = useState(false);
  const { user } = useAuth();
  const { data } = useGetOrder(user?._id as string);
  console.log(data, "data");
  useEffect(() => {
    setHydrate(true);
  }, []);

  if (!hydrate) return null;

  if (data) {
    return (
      <div className="h-screen p-8">
        <h2 className="text-3xl font-bold">My orders</h2>
        <div className="grid grid-cols-1 gap-y-6 justify-items-center md:justify-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 md:gap-x-0 lg:gap-20 xl:gap-6">
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
