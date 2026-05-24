import type { Metadata } from "next";
import { Pixelify_Sans, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import PrathameshAI from "@/components/PrathameshAI";

const pixelify = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
});

const pressStart = Press_Start_2P({
  variable: "--font-press",
  weight: "400",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRATHAMESH.OS",
  description: "Futuristic pixel-art cyberpunk operating system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixelify.variable} ${pressStart.variable} ${vt323.variable} antialiased`}
    >
      <body className="flex flex-col crt-curve font-pixel bg-black text-white relative">
        <div className="noise" />
        <div className="vignette" />
        <div className="scanlines" />
        <CustomCursor />
        <PrathameshAI />
        {children}
      </body>
    </html>
  );
}
