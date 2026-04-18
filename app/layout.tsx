import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
  metadataBase: new URL("https://www.rssp.sk"),
  title: {
    default: "Stavebný sociálny podnik s.r.o.",
    template: "%s | Stavebný sociálny podnik s.r.o.",
  },
  description:
    "Stavebný sociálny podnik z Banskej Štiavnice zameraný na kvalitné realizácie, technické riešenia a udržateľný dopad v regióne.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="sk">
      <body className={`${apercu.variable} min-h-screen bg-[var(--background)] font-sans text-[var(--ink)] antialiased`}>
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
