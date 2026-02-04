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
  title: "Juri Nardelli | Concert Pianist",
  description:
    "Classically trained. Digitally fluent. Concert pianist bridging the precision of performance with modern technology.",
  keywords: [
    "pianist",
    "concert pianist",
    "classical piano",
    "music",
    "mentorship",
  ],
  authors: [{ name: "Juri Nardelli" }],
  openGraph: {
    title: "Juri Nardelli | Concert Pianist",
    description:
      "Classically trained. Digitally fluent. Concert pianist bridging the precision of performance with modern technology.",
    url: "https://jurinardelli.com",
    siteName: "Juri Nardelli",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juri Nardelli | Concert Pianist",
    description:
      "Classically trained. Digitally fluent. Concert pianist bridging the precision of performance with modern technology.",
  },
  robots: {
    index: true,
    follow: true,
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
