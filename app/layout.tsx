import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "NextHire",
    template: "%s | NextHire"
  },
  description:
    "NextHire connects employers and candidates with focused recruiting support. Your Next Great Hire. Your Next Great Job.",
  openGraph: {
    title: "NextHire",
    description: "Your Next Great Hire. Your Next Great Job.",
    siteName: "NextHire",
    type: "website"
  },
  applicationName: "NextHire",
  appleWebApp: {
    title: "NextHire"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans text-gray-950 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
