import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased relative`}
      >
        {/* Background pattern - subtle notebook paper style */}
        <div className="fixed inset-0 -z-20">
          {/* Base background color */}
          <div className="fixed inset-0 bg-[#f9f8f6]"></div>
          
          {/* Subtle texture and patterns */}
          <div className="fixed inset-0 opacity-15 bg-[url('/images/noise-texture.png')] bg-repeat"></div>
          
          {/* Notebook paper lines - more subtle */}
          <div className="fixed inset-0 bg-[linear-gradient(#e8e6e0_1px,transparent_1px)] bg-[size:100%_28px] opacity-20"></div>
          
          {/* Notebook margin line - more subtle */}
          <div className="fixed top-0 bottom-0 left-[32px] md:left-[64px] w-0.5 bg-primary/3"></div>
        </div>
        
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        <Header />
        <main className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
