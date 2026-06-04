import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono, Comfortaa } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

// Target site fonts from sanjaybehera.web.app
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://prathamesh-jadhav.vercel.app'),
  title: "Prathamesh Jadhav | AI/ML Engineer & Data Scientist",
  description: "Engineering-focused AI/ML developer specializing in scalable low-latency infrastructure, custom vector databases, and RAG pipelines.",
  keywords: ["Prathamesh Jadhav", "AI Engineer", "Machine Learning", "Data Scientist", "Vector Database", "HNSW", "RAG Pipeline", "Next.js Portfolio", "Brutalist Web Design"],
  authors: [{ name: "Prathamesh Jadhav", url: "https://github.com/Prathamesh-Jadhav04" }],
  creator: "Prathamesh Jadhav",
  openGraph: {
    title: "Prathamesh Jadhav | AI/ML Engineer & Data Scientist",
    description: "Specializing in scalable low-latency infrastructure, custom vector databases, and RAG pipelines.",
    url: "https://github.com/Prathamesh-Jadhav04/Portfolio-Website",
    siteName: "Prathamesh Jadhav Portfolio",
    images: [
      {
        url: "/public/background-interactive.png",
        width: 1200,
        height: 630,
        alt: "Prathamesh Jadhav AI/ML Portfolio Background",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathamesh Jadhav | AI/ML Engineer & Data Scientist",
    description: "Specializing in scalable low-latency infrastructure, custom vector databases, and RAG pipelines.",
    images: ["/public/background-interactive.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable} ${comfortaa.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
