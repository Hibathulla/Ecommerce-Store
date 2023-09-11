"use client";
import React from "react";
import Container from "../../ui/Container";
import Link from "next/link";
import MainNav from "./MainNav";
import NavbarActions from "./navbar-actions";
import UserNav from "./user-nav";
import { useSettings } from "../../../services/settings";

const data = [
  {
    id: "31241",
    name: "Shirts",
    billboard: "",
    createdAt: new Date(),
    category: "",
  },
  {
    id: "54254",
    name: "Shoes",
    billboard: "",
    createdAt: new Date(),
    category: "",
  },
  {
    id: "42314",
    name: "Pants",
    billboard: "",
    createdAt: new Date(),
    category: "",
  },
];

const Navbar = () => {
  const { data } = useSettings();
  console.log(data, "navbar");

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav />
          <div className="ml-auto flex items-center gap-6">
            <NavbarActions />
            <UserNav />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
