import "./globals.css";
import React from "react";

import { ToastContainer } from "react-toastify";

import { Providers } from "@/modules/redux/provider";
import Navbar from "@/modules/ui/components/navbar";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Hi Story!",
  description: "A story telling platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cupcake">
      <body
        suppressHydrationWarning={true} // Extensions similar to Grammarly and LanguageTool cause hydration warnings, so we suppress them.
      >
        <Providers>
          <Navbar />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
