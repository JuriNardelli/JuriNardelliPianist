import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Juri Nardelli | Concert Pianist & Piano Teacher",
  description:
    "Concert pianist and piano teacher offering private piano lessons and mentorship for adults. Trained at G. Verdi Conservatory Milan and Conservatorium van Maastricht. Transform your playing with expert guidance.",
  keywords: [
    "piano lessons",
    "piano teacher",
    "online piano lessons",
    "adult piano lessons",
    "concert pianist",
    "classical piano",
    "piano mentorship",
    "learn piano",
    "piano instructor",
    "Juri Nardelli",
    "private piano lessons",
    "piano coaching",
  ],
  authors: [{ name: "Juri Nardelli" }],
  openGraph: {
    title: "Juri Nardelli | Concert Pianist & Piano Teacher",
    description:
      "Concert pianist offering private piano lessons and mentorship for dedicated students. Transform your playing with expert guidance from an internationally trained musician.",
    url: "https://jurinardelli.com",
    siteName: "Juri Nardelli",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jurinardelli.com/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Juri Nardelli - Concert Pianist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juri Nardelli | Concert Pianist & Piano Teacher",
    description:
      "Concert pianist offering private piano lessons and mentorship. Transform your playing with expert guidance.",
    images: ["https://jurinardelli.com/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jurinardelli.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
