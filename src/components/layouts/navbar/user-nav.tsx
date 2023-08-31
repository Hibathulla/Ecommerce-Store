"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { User2, LogOut, ShoppingBag } from "lucide-react";

export default function UserNav() {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex rounded-full w-8 h-8 bg-gray-300 mt-2"></Menu.Button>
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
                  <button
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
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
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
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
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
