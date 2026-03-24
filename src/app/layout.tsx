import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Properties in Egypt | Premium Real Estate & Investments",
  description: "Discover exclusive properties, luxury homes, and investment opportunities in Egypt. Perfect for Egyptians and Gulf investors looking for second homes.",
  keywords: ["Properties in Egypt", "Egypt Real Estate", "Investment Properties Egypt", "Homes in Egypt", "Luxury Real Estate Egypt"],
  alternates: {
    canonical: "https://propertiesinegypt.com",
    languages: {
      "en-US": "https://propertiesinegypt.com",
    },
  },
  openGraph: {
    title: "Properties in Egypt | Premium Real Estate",
    description: "Discover exclusive properties, luxury homes, and investment opportunities in Egypt.",
    url: "https://propertiesinegypt.com",
    siteName: "Properties in Egypt",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
