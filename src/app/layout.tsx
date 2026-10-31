import type { Metadata } from "next";
import { Inter, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | SSISRANIP`,
    template: `%s | SSIS Ranip`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "SSIS Ranip",
    "Shree Swaminarayan International School",
    "CBSE school Ahmedabad",
    "School in Ranip",
    "School in Ahmedabad",
  ],
  metadataBase: new URL("https://ssisranip.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_CONFIG.name} | SSISRANIP`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | SSISRANIP`,
    description: SITE_CONFIG.description,
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
        className={`${inter.variable} ${playfair.variable} ${poppins.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
