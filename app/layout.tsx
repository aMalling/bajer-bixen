import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MyNavBar from "../components/navbar.tsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bajer Bixen",
  description: "Byens Bedste Boomers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyNavBar />
        {children}
      </body>
    </html>
  );
}
