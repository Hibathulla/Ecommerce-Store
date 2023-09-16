"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { User2, LogOut, ShoppingBag } from "lucide-react";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGetLoggedUser } from "../../../services/user";
import Image from "next/image";
import { useAuth } from "../../../hooks/use-auth";

interface CategoryProps {
  href: string;
  label: string;
  active: boolean;
}

const CategoryButton: React.FC<{
  routes: CategoryProps[];
}> = ({ routes }) => {
  const { loggedIn, logout } = useAuth();
  const router = useRouter();

  const loginHandler = () => {
    router.push("/login");
  };

  const logoutHandler = () => {
    window.localStorage.clear();
    logout();
    router.push("/login");
  };

  return (
    <div className="ml-3">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          {loggedIn ? (
            <Menu.Button className="inline-flex border font-semibold px-4 py-1 relative items-center rounded-full">
              Category
            </Menu.Button>
          ) : (
            <Button onClick={loginHandler} type="button" className="text-xs">
              Login
            </Button>
          )}
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-2.5  space-y-2">
              {routes?.map((route, index) => {
                return (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <Link
                        href={route.href}
                        className={`${
                          route.active
                            ? "bg-gray-800 text-white"
                            : "text-gray-900"
                        } group flex w-full hover:bg-gray-800 hover:text-white font-semibold items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {route.label}
                      </Link>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CategoryButton;
