"use client";
import React from "react";
import Container from "../../ui/Container";
import Link from "next/link";
import MainNav from "./MainNav";
import NavbarActions from "./navbar-actions";
import UserNav from "./user-nav";
import { useSettingClick } from "../../../services/settings";

const Navbar = () => {
  const { data } = useSettingClick();
  console.log(data, "navbar");

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">
              {data?.settings?.storeName ?? "Buyzillo"}
            </p>
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
