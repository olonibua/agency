import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  localfont from "next/font/local"
import "./globals.css";

// import {cn} from '@lib'

const inter = Inter({ subsets: ["latin"] });

const RFDewiExtended = localfont({
  src: [
    {
      path: "../font/RFDewiExtended-Regular.ttf",
      weight: "200",
    },
  ],
  variable: "--font-RFDewiExtended",
});
export const metadata: Metadata = {
  title: "DIA",
  description: "DIA Agency App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={RFDewiExtended.className}>{children}</body>
    </html>
  );
}
