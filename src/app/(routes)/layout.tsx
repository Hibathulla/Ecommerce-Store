"use client";
import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar/Navbar";
import { Fragment, useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
