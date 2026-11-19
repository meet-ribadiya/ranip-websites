import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import PageLoader from "@/components/ui/PageLoader";
import { SITE_CONFIG, SITE_IMAGES } from "@/lib/constants";

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
    "Best school Ranip Gujarat",
  ],
  metadataBase: new URL("https://ssisranip.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_CONFIG.name} | SSISRANIP`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: SITE_IMAGES.ogImage,
        width: 1400,
        height: 750,
        alt: "Shree Swaminarayan International School Ranip",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | SSISRANIP`,
    description: SITE_CONFIG.description,
    images: [SITE_IMAGES.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <PageLoader />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
