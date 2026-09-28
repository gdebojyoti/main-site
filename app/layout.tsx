import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Debojyoti Ghosh | UI / UX Developer & Front-end Engineer",
  description: "UI / UX Developer & Front-end Engineer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full dark`}>
      <body className="h-full">{children}</body>
    </html>
  );
}
