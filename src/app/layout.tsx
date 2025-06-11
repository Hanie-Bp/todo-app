// src/app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

// If you want to add fonts, enable these:
// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Your App",
  description: "Something cool",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={``}>
      <body>{children}</body>
    </html>
  );
}
