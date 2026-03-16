import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FreeGuidePage } from "@/components/FreeGuidePage";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Free Guide: 4 Practice Secrets From a Concert Pianist | Juri Nardelli",
  description:
    "Download the free PDF guide: 4 practice secrets I learned from one of the world's greatest concert pianists. Transform how you practice piano in one afternoon.",
  keywords: [
    "free piano guide",
    "piano practice tips",
    "piano practice secrets",
    "how to practice piano",
    "concert pianist tips",
    "piano technique guide",
  ],
  openGraph: {
    title: "Free Guide: 4 Practice Secrets From a Concert Pianist",
    description:
      "The techniques I learned studying under a Liszt Competition winner — now yours for free.",
    url: "https://jurinardelli.com/free-guide",
    images: [
      {
        url: "https://jurinardelli.com/bio/mentor-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Juri Nardelli — Concert Pianist",
      },
    ],
  },
  alternates: {
    canonical: "https://jurinardelli.com/free-guide",
  },
};

export default function FreeGuideLandingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <FreeGuidePage />
      </main>
      <Footer />
    </>
  );
}
