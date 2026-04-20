import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/site-data";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";

const apercu = localFont({
  src: [
    {
      path: "../public/fonts/ApercuPro-ExtraLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ApercuPro-Light.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-apercu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: company.shortDescription,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "/",
    siteName,
    title: siteName,
    description: company.shortDescription,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: company.shortDescription,
    images: [defaultOgImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    legalName: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: company.office.email,
    telephone: "+421915447187",
  },
  {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    name: siteName,
    image: `${siteUrl}${defaultOgImage}`,
    "@id": `${siteUrl}/#business`,
    url: siteUrl,
    email: company.office.email,
    telephone: "+421915447187",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Eleny Maróthy Šoltésovej 5397/3",
      addressLocality: "Banská Štiavnica",
      postalCode: "969 01",
      addressCountry: "SK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.461,
      longitude: 18.8944,
    },
  },
];

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sk">
      <body className={`${apercu.variable} min-h-screen bg-[var(--background)] font-sans text-[var(--ink)] antialiased`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
