import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollExperience } from "@/components/ScrollExperience";
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
  metadataBase: new URL("https://meinbenefit.at"),
  title: "MeinBenefit | Premium Benefit für finanzielle Klarheit",
  description:
    "MeinBenefit unterstützt Berufstätige, Familien und Unternehmen mit persönlicher Analyse, laufender Kostenoptimierung und greifbaren Mitarbeiter-Benefits.",
  keywords: [
    "MeinBenefit",
    "Mitarbeiter Benefit",
    "Kostenoptimierung",
    "Gold Benefit",
    "Finanzielle Klarheit",
    "Employer Branding",
  ],
  openGraph: {
    title: "MeinBenefit",
    description:
      "Ein Vorteil für Menschen. Ein Benefit für Unternehmen. Finanzielle Klarheit und langfristiger Mehrwert.",
    type: "website",
    locale: "de_AT",
    url: "https://meinbenefit.at",
    siteName: "MeinBenefit",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ScrollExperience />
        {children}
      </body>
    </html>
  );
}
