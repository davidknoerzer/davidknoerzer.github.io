import type { Metadata } from "next";
import { Rubik, Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";

export const font = Rubik({
  weight: ['500'],
  subsets: ['latin']
})
export const codingFont = Nanum_Gothic_Coding({
  weight: ['400'],
  subsets: ['latin']
})

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
