import React from "react";
import Container from "../../ui/Container";
import Link from "next/link";
import MainNav from "./MainNav";
import NavbarActions from "./navbar-actions";
import UserNav from "./user-nav";

const data = [
  { id: "31241", name: "Shirts", billboard: "" },
  { id: "54254", name: "Shoes", billboard: "" },
  { id: "42314", name: "Pants", billboard: "" },
];

const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={data} />
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
