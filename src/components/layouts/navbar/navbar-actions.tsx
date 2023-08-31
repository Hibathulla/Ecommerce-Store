"use client";
import Button from "@/components/ui/Button";
import { ShoppingBagIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBagIcon color="white" size={20} className="" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
