import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ThermalBackground from "@/components/background/ThermalBackground";
import Navbar from "@/components/navigation/Navbar";
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
  title: "Max Thermal | EPS & Cork Sheet Solutions",
  description:
    "Leading manufacturer and engineered solutions provider of Expanded Polystyrene (EPS) and high-performance Cork sheets for building insulation, refrigeration, packaging, and industrial acoustics.",
  keywords: [
    "Max Thermal",
    "EPS sheets",
    "Cork sheets",
    "Thermal insulation",
    "Building insulation",
    "Acoustic cork",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFF5F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-[#FFEADB] selection:text-[#182337]">
        <SmoothScrollProvider>
          {/* Global Warm Peach & Reeded Glass Ribbed Background */}
          <ThermalBackground />

          {/* Floating Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="relative z-10 flex-grow pt-24 sm:pt-28">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
