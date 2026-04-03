import type { Metadata } from "next";
import { Barlow, Archivo_Black } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const bodyFont = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

const headingFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "FC Axel JO19-1 | Teamsite",
  description: "Officiele teamsite met selectie, programma en standen van FC Axel JO19-1.",
  metadataBase: new URL("https://fcaxel.local"),
  openGraph: {
    title: "FC Axel JO19-1",
    description: "Geen woorden, maar daden. Op en naast het veld.",
    images: ["/assets/images/sponsor.jpg"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
