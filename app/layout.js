import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoldSparkleBackground from "@/components/GoldSpark";
import ContactButton from "@/components/ContactBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- HIGH-LEVEL SEO CONFIGURATION ---
export const metadata = {
  metadataBase: new URL('https://www.smrtravels.in'), // Replace with your actual domain
  title: {
    default: "SMR Travels | Premium Tamil Nadu Tour Packages & Cab Services in Trichy",
    template: "%s | SMR Travels",
  },
  description: "Official SMR Travels: Premium cab services and curated tour packages across Tamil Nadu, Kerala, and Karnataka. Specializing in Valparai, Ooty, and Madurai.",
  keywords: [
    "SMR Travels", 
    "Tamil Nadu Tour Packages", 
    "Outstation Cabs Tamil Nadu", 
    "Valparai Taxi Service", 
    "Ooty Coonoor Kotagiri Tour", 
    "South India Heritage Tours",
    "Innova Crysta Rental Tamil Nadu",  "Madurai Rameshwaram Kanyakumari tour package",
  "Tamil Nadu temple tour",
  "Navagraha temple tour package",
  "Arupadaiveedu tour",
  "Divya Desam tour Tamil Nadu",
  "Rameshwaram pilgrimage packages",
  "Thanjavur Big Temple tour",
  "Kanchipuram temple tour",
  "Velankanni church tour",
  "Chidambaram Natarajar temple tour", "Ooty Kodaikanal tour package",
  "Ooty honeymoon packages",
  "Kodaikanal sightseeing tour",
  "Nilgiri Mountain Railway booking",
  "Yercaud weekend getaway",
  "Mudumalai wildlife safari",
  "Coonoor day trip",
  "Valparai tour packages",
  "Hogenakkal falls tour",
  "Pichavaram mangrove forest tour",  "Tamil Nadu tour packages from Chennai",
  "South India tours from Bangalore",
  "Tamil Nadu packages from Mumbai",
  "Tours from Delhi to Tamil Nadu",
  "Chennai city sightseeing",
  "Mahabalipuram shore temple tour",
  "Pondicherry Auroville tour",
  "Kanyakumari sunrise tour",
  "Chettinad heritage tour",
  "Coimbatore to Ooty packages",
   "TTDC tour packages",
  "Tamil Nadu budget tour",
  "Luxury Tamil Nadu holiday",
  "Tamil Nadu family package",
  "10 day Tamil Nadu itinerary",
  "Tamil Nadu tourism official packages",
  "Best time to visit Tamil Nadu",
  "Tamil Nadu tour guide",
  "LTC tour packages Tamil Nadu",
  "South India temple circuit"
  ],
  authors: [{ name: "SMR Travels" }],
  creator: "SMR Travels",
  publisher: "SMR Travels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // OpenGraph (Facebook/LinkedIn/WhatsApp)
  openGraph: {
    title: "SMR Travels | Luxury South India Expeditions",
    description: "Experience Tamil Nadu's soul with our premium fleet and expert local guides.",
    url: 'https://www.smrtravels.in',
    siteName: 'SMR Travels',
    images: [
      {
        url: '/packages/kovalam.webp', // Place a high-res image in your /public folder
        width: 1200,
        height: 630,
        alt: 'SMR Travels Premium Fleet',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: "/logo.jpg" },
      { url: "/logo.jpg", sizes: "32x32", type: "image/png" },
      { url: "/logo.jpg", sizes: "192x192", type: "/logo.jpg" },
    ],
    apple: [
      { url: "/logo.jpg", sizes: "180x180", type: "/logo.jpg" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.jpg",
        color: "#D4AF37", // Your signature gold color
      },
    ],
  },
  manifest: "/site.webmanifest",

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'SMR Travels | Premium Tours & Cabs',
    description: 'Book curated Tamil Nadu tour packages and premium outstation cabs.',
    images: ['/og-image.jpg'], 
  },

  // Robots & Search Console
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-[#D4AF37] selection:text-black`}
    >
      <body className="bg-[#050505] text-gray-200 min-h-screen flex flex-col relative">
        {/* Fixed Background Layer */}
        <GoldSparkleBackground />

        {/* Global Navigation */}
        <Navbar />

        {/* Core Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Persistent UI Elements */}
        <ContactButton />
        <Footer />
      </body>
    </html>
  );
}