import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Baloo_Da_2 } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import ThermalBackground from "@/components/background/ThermalBackground";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import MaxBot from "@/components/chat/MaxBot";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const balooDa2 = Baloo_Da_2({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["bengali"],
  variable: "--font-bengali",
  display: "swap",
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
      className={`${geistSans.variable} ${geistMono.variable} ${balooDa2.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative selection:bg-[#FFEADB] selection:text-[#182337] w-full max-w-[100vw] overflow-x-hidden">
        <LanguageProvider>
          <SmoothScrollProvider>
            {/* Global Warm Peach & Reeded Glass Ribbed Background */}
            <ThermalBackground />

            {/* Floating Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="relative z-10 flex-grow pt-17 sm:pt-19 w-full max-w-full overflow-x-clip">
              {children}
            </main>

            {/* Site Footer */}
            <Footer />

            {/* Global Floating Action Buttons & Interactive MAX Bot AI */}
            <MaxBot />
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
