import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tours & Stays | Premium Travel Experiences",
  description: "High-end luxury travel, stays, and transport services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#D4AF37] selection:text-black`}
    >
      {/* Set the base background to black and text to a subtle gray */}
      <body className="bg-[#050505] text-gray-200 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
          <Footer/>
        </main>
        {/* You can add a Footer here later */}
      </body>
    </html>
  );
}