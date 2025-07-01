import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zahan Wasif - Full Stack Developer",
  description:
    "Portfolio of Zahan Wasif, a full-stack developer specializing in Next.js, React, and MongoDB",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "MongoDB",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

