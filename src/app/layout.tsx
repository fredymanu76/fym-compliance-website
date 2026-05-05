import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FYM Compliance Limited — Regulated Technology Architects",
    template: "%s | FYM Compliance Limited",
  },
  description:
    "The architects behind regulated technology. Full-stack regulatory technology solutions for financial services, compliance, and specialist industries.",
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
