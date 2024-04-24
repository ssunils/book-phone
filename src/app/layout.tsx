import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import './globals.css'
import AppWrapper from "@/context/app-wrapper";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const chakra = Chakra_Petch({
  weight: ["400", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Device Deck | Book your devices here",
  description: "Easy online portal to book your devices for testing",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakra.className} bg-pattern`}>
        {children}
      </body>
    </html>
  );
}
