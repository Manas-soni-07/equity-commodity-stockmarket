import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Equity & Commodity Market Research | Indian Market Research",
    template: "%s | Equity & Commodity Market Research",
  },
  description:
    "Research-based insights across Indian equities, indices and commodities. Understand market trends, technical levels and important market developments.",
  keywords: [
    "Indian stock market research",
    "NSE equity research",
    "BSE market analysis",
    "Nifty 50 research",
    "Bank Nifty levels",
    "MCX commodity research",
    "Gold Silver market research India",
    "Technical analysis Indian markets",
  ],
  authors: [{ name: "Equity & Commodity Market Research Desk" }],
  creator: "Equity & Commodity Market Research",
  publisher: "Equity & Commodity Market Research",
  metadataBase: new URL("https://equitycommodityresearch.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Equity & Commodity Market Research | Indian Market Research",
    description:
      "Research-based insights across Indian equities, indices and commodities. Understand market trends, technical levels and important market developments.",
    url: "https://equitycommodityresearch.com",
    siteName: "Equity & Commodity Market Research",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equity & Commodity Market Research",
    description: "Understand the Indian Market. Make Informed Decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    COMPANY_DATA.whatsappMessage
  )}`;

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased">
        {/* Market Hours & Compliance Top Bar */}
        <TopBar />

        {/* Sticky Main Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Configurable WhatsApp Quick Assistance Floating Widget */}
        <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-6 right-6 z-40">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Connect with our research desk on WhatsApp"
            title="Chat with our research desk"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold hidden sm:inline">WhatsApp Inquiries</span>
          </a>
        </aside>
      </body>
    </html>
  );
}
