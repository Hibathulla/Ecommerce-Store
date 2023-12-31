import Footer from "@/components/layouts/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/layouts/navbar/Navbar";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import ModalProvider from "./ModalProvider";

const urbanFont = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

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
    <html lang="en">
      <body className={urbanFont.className}>
        <Toaster position="top-right" reverseOrder={false} />
        <Providers>
          <ModalProvider />
          {children}
        </Providers>
      </body>
    </html>
  );
}
