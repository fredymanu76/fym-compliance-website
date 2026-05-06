import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FYM Compliance Limited — Solutions for Regulated Industries",
    template: "%s | FYM Compliance Limited",
  },
  description:
    "Premier solutions provider for regulated industries. Comprehensive regulatory solutions for financial services, compliance, and specialist sectors.",
  keywords: [
    "RegTech",
    "regulatory technology",
    "compliance",
    "FCA",
    "financial services",
    "UK",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "FYM Compliance Limited",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
