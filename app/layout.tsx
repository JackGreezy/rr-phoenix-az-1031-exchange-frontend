import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCTA } from "@/components/layout/sticky-cta";
import {
  COMPANY_NAME,
  PHONE_NUMBER,
  SITE_DOMAIN,
  SUPPORT_EMAIL,
} from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_DOMAIN),
  title: {
    default: "1031 Exchange Phoenix | Property & DST Options",
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Phoenix owners ready for less landlord work can compare direct replacements and passive DST options while organizing the exchange timeline.",
  openGraph: {
    type: "website",
    url: SITE_DOMAIN,
    title: "1031 Exchange Phoenix | Property & DST Options",
    description:
      "Phoenix owners ready for less landlord work can compare direct replacements and passive DST options while organizing the exchange timeline.",
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_DOMAIN}/images/blog/desert-modern.svg`,
        width: 1200,
        height: 630,
        alt: "Desert sunrise illustration representing 1031 Exchange of Phoenix.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1031 Exchange Phoenix | Property & DST Options",
    description:
      "Phoenix owners ready for less landlord work can compare direct replacements and passive DST options while organizing the exchange timeline.",
    images: [`${SITE_DOMAIN}/images/blog/desert-modern.svg`],
  },
  appleWebApp: {
    title: COMPANY_NAME,
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: COMPANY_NAME }],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "contact:phone_number": PHONE_NUMBER,
    "contact:email": SUPPORT_EMAIL,
  },

  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${sourceSans.variable} ${inter.variable} bg-[#F5F3EF] text-[#2A2A2A] antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#006E7F] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  );
}
