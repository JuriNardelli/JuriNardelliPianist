import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { LearnPage } from "@/components/LearnPage";
import { Footer } from "@/components/Footer";
import { JsonLd, COURSE_JSONLD } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Learn Piano With a Concert Pianist | Juri Nardelli",
  description:
    "Free practice guide + private online piano lessons for adults. Whether you're starting from zero or ready to level up — get concert-level guidance from a pianist trained under a Liszt Competition winner.",
  keywords: [
    "learn piano",
    "piano lessons online",
    "adult piano lessons",
    "free piano guide",
    "piano practice tips",
    "piano mentorship",
    "private piano teacher",
  ],
  openGraph: {
    title: "Learn Piano With a Concert Pianist | Juri Nardelli",
    description:
      "Free practice guide + private online piano lessons for adults. Concert-level guidance.",
    url: "https://jurinardelli.com/learn",
    images: [
      {
        url: "https://jurinardelli.com/bio/mentor-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Juri Nardelli — Concert Pianist & Piano Mentor",
      },
    ],
  },
  alternates: {
    canonical: "https://jurinardelli.com/learn",
  },
};

export default function LearnLandingPage() {
  return (
    <>
      <JsonLd data={COURSE_JSONLD} />
      <Navbar />
      <main className="bg-black">
        <LearnPage />
      </main>
      <Footer />
    </>
  );
}
