import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const nohemi = localFont({ src: "../../public/Nohemi-VF.ttf", variable: "--font-nohemi" });
const satoshi = localFont({
  src: "../../public/Satoshi-Variable.ttf",
  variable: "--font-satoshi"
});

export const metadata: Metadata = {
  title: "Bhavit Wadhwa | software developer ☕",
  description: "Hello hello! this is my personal website."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nohemi.variable} ${satoshi.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
