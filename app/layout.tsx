import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MyNavBar from "@/components/navbar";
import MyFooter from "@/components/footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ØLJULEKALENDEREN 2025",
  description: "Byens Bedste Boomers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bajer-base">
        <MyNavBar />
        {children}
        <Analytics />
        <MyFooter />
      </body>
    </html>
  );
}
