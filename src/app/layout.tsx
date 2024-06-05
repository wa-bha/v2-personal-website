import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";

const nohemi = localFont({ src: "../../public/fonts/Nohemi-VF.ttf", variable: "--font-nohemi" });
const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhavit.dev"),
  title: {
    default: "Bhavit Wadhwa | software engineer",
    template: "%s | Bhavit Wadhwa"
  },
  description: "Hello hello! this is my personal website.",
  openGraph: {
    title: "Bhavit Wadhwa",
    description: "Hello hello! this is my personal website.",
    url: "https://bhavit.dev",
    siteName: "Bhavit Wadhwa",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  twitter: {
    title: "Bhavit Wadhwa",
    description: "Hello hello! this is my personal website.",
    card: "summary_large_image"
  }
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cx(nohemi.variable, satoshi.variable)}>
      <body className="antialiased font-satoshi bg-floral-white text-black ">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
