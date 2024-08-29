import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Heading from "./components/Heading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanvir A Khan",
  description: "Created By Tanvir Ahmed Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Heading></Heading>
        {children}</body>
    </html>
  );
}
