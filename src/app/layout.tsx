import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const font = Rubik({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David's Portfolio",
  description: "Portfolio page of David Knörzer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
