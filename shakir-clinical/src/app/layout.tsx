import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Chatbot } from "@/components/Chatbot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-9fe6a43d.vercel.app"),
  title: "Shakir Clinical Laboratory | Precision Diagnostics in Saudi Arabia",
  description:
    "Shakir Clinical Laboratory delivers accredited medical testing, digital patient portals, and 24/7 support inspired by leading regional laboratory excellence.",
  keywords: [
    "clinical laboratory",
    "diagnostics",
    "medical testing",
    "patient portal",
    "Saudi Arabia laboratory",
  ],
  openGraph: {
    title: "Shakir Clinical Laboratory",
    description:
      "Regional leader in precision diagnostics with digital patient access and hospital integrations.",
    url: "https://agentic-9fe6a43d.vercel.app",
    siteName: "Shakir Clinical Laboratory",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Shakir Clinical Laboratory dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakir Clinical Laboratory",
    description:
      "Accredited diagnostics, patient portal, and 24/7 clinician support across the Kingdom.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-surface text-brand-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Chatbot />
      </body>
    </html>
  );
}
