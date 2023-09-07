"use client";
import Button from "@/components/ui/Button";
import { ShoppingBagIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import useCart from "../../../hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const cartHandler = () => {
    router.push("/cart");
  };

  return (
    <div className="flex items-center gap-x-4">
      <Button
        onClick={cartHandler}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBagIcon color="white" size={20} className="" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart?.items?.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
