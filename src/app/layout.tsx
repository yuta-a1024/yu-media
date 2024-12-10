import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteData } from "@/config/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteData.siteName}`,
    default: siteData.siteName,
  },
  description: "IT情報を発信する記事メディアです。",
  authors: {name: "Yu code", url: siteData.siteUrl},
  keywords: ["Next.js", "Three.js", "FrontEnd"],
  openGraph: {
    title: siteData.siteName,
    description: siteData.siteDescription,
    url: siteData.siteUrl,
    siteName: siteData.siteName,
    images: [
      {url: `${siteData.siteUrl}/opengraph-image`, width: 1200,height: 630}
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex-grow container mx-auto">{children}</main>
          <Footer />
        </div>
        
      </body>
    </html>
  );
}
