import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { productType } from "../types/product";
import { AlertTriangle } from "lucide-react";

interface CartStore {
  items: productType[];
  addItem: (data: productType) => void;
  totalPrice: number;
  coupon: number;
  setTotalPrice: (price: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      totalPrice: 0,
      coupon: 0,
      addItem: (data: productType) => {
        const currentItems = get().items;
        const currentPrice = get().totalPrice;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.error("Item already in cart.");
        }

        const total =
          currentPrice +
          (data?.discountPrice! ? data?.discountPrice : data?.price);

        set({ items: [...get().items, data], totalPrice: total });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        const filteredItem = currentItems.filter((item) => item.id !== id);
        const currentItem = currentItems.find((item) => item.id === id);
        const total =
          get()?.totalPrice -
          (currentItem?.discountPrice!
            ? currentItem?.discountPrice!
            : currentItem?.price!);
        set({ items: [...filteredItem], totalPrice: total });
        toast.success("Item removed from cart.");
      },
      setTotalPrice: (price: number) => {
        const currentPrice = get().totalPrice;
        const currentItems = get().items;

        const newPrice = currentPrice - price;

        set({ items: [...get().items], totalPrice: newPrice, coupon: price });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
