import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
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
  title: "OptiPay | Optical Retail Software & Clinic OS - 10x Faster Billing & Clinical Rx",
  description:
    "The modern cloud operating system for Indian optical retailers, eyewear boutiques, and eye clinics. 3-click billing, OD/OS clinical prescriptions, split GST (HSN 9001 & 9003), lens edging job slips, and instant thermal printing.",
  keywords: [
    "optical retail software",
    "optical billing software India",
    "optometry clinic software",
    "optical POS",
    "split GST billing optical",
    "prescription eyewear software",
    "eyewear store management",
    "optician billing app",
  ],
  authors: [{ name: "OptiPay Systems" }],
  creator: "OptiPay",
  metadataBase: new URL("https://optipay.in"),
  openGraph: {
    title: "OptiPay | Optical Retail Software & Clinic OS",
    description:
      "3-step billing and clinical prescription workflow engineered specifically for Indian optical stores. Zero installation, 100% cloud reliability.",
    url: "https://optipay.in",
    siteName: "OptiPay",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiPay | Optical Retail Software & Clinic OS",
    description: "The 10x faster billing & clinical software for Indian optical retailers.",
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
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Structured JSON-LD Schema for Google SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "OptiPay",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web Browser, Windows, macOS, Android, iOS",
              description:
                "Optical retail POS, clinical prescription management, and multi-HSN GST billing software for Indian optical businesses.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
                name: "Free 10-Minute Demo",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-[#f8fafc] dark:bg-[#090a0f] text-slate-900 dark:text-slate-100 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
