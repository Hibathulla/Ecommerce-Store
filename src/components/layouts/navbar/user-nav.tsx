"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { User2, LogOut, ShoppingBag } from "lucide-react";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGetLoggedUser } from "../../../services/user";
import Image from "next/image";

export default function UserNav() {
  let token: string = "";
  if (typeof window != "undefined") {
    token = localStorage.getItem("token") as string;
  }
  const router = useRouter();

  const loginHandler = () => {
    router.push("/login");
  };

  const logoutHandler = () => {
    window.localStorage.clear();
    router.push("/login");
  };

  const { data } = useGetLoggedUser();

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          {token ? (
            <Menu.Button className="inline-flex relative items-center rounded-full w-10 h-10 mt-2">
              {data?.user?.photo?.length != 0 ? (
                <div className="rounded-full">
                  <Image
                    fill
                    className="rounded-full object-cover"
                    objectFit="cover"
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/img/users/${data?.user?.photo}`}
                    alt="profile img"
                  />
                </div>
              ) : (
                <div className="w-full h-full rounded-full">
                  <User2 className="w-full h-full" />
                </div>
              )}
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
          <Menu.Items className="absolute  z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/profile"
                    className={`${
                      active ? "bg-gray-800 text-white" : "text-gray-900"
                    } group flex w-full font-semibold items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <User2 className="mr-2 h-5 w-5" aria-hidden="true" />
                    {/* {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/update-password"
                    className={`${
                      active ? "bg-gray-800 text-white" : "text-gray-900"
                    } group flex w-full font-semibold items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <User2 className="mr-2 h-5 w-5" aria-hidden="true" />
                    {/* {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Update password
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/orders"
                    className={`${
                      active ? "bg-gray-800 text-white" : "text-gray-900"
                    } group flex w-full font-semibold items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" aria-hidden="true" />
                    {/* {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    My orders
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={logoutHandler}
                    className={`${
                      active ? "bg-gray-800 text-white" : "text-gray-900"
                    } group flex w-full font-semibold items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <LogOut className="mr-2 h-5 w-5" aria-hidden="true" />
                    {/* {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )} */}
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
