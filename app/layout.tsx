import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Configure Serif Font (Headings)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
});

// Configure Sans Font (Body, Buttons, Navigation)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sans",
});

// High-End SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://naza-bulam.vercel.app'),
  title: {
    default: "Naza Bulam | Luxury Fashion House",
    template: "%s | Naza Bulam",
  },
  description: "Dressed in Your Story. Naza Bulam is a premier luxury fashion house in Abuja, Nigeria, specializing in Couture, Ready-to-Wear, and Bespoke collections.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Naza Bulam | Luxury Fashion House',
    description: 'Bespoke tailoring and couture collections for the discerning woman.',
    url: 'https://naza-bulam.vercel.app',
    siteName: 'Naza Bulam',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naza Bulam | Luxury Fashion House',
    description: 'Bespoke tailoring and couture collections for the discerning woman.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-nb-black text-nb-cream font-sans antialiased flex flex-col min-h-screen">
        <Navbar />
        {/* We wrap children in a flex-grow div so the footer stays at the bottom */}
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}