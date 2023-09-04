import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar/Navbar";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
