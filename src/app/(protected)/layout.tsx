import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar/Navbar";
import { Fragment } from "react";
import Protector from "./Protector";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Navbar />
      <Protector>{children}</Protector>
      <Footer />
    </Fragment>
  );
}
