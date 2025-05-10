import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hi, Juan here",
  description: "A more personal view of my life, perspective, and projects",
  icons: {
    icon: process.env.NODE_ENV === 'production' 
      ? "/personalWebsite/images/NFTCalavera.png"
      : "/images/NFTCalavera.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
