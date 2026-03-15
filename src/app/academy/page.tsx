import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AcademyFunnel } from "@/components/AcademyFunnel";
import { Footer } from "@/components/Footer";
import { JsonLd, COURSE_JSONLD } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Piano Lessons & Mentorship | Juri Nardelli Academy",
  description:
    "Private online piano lessons for adults. Weekly 1-on-1 lessons, unlimited feedback, workshops & exclusive community. Learn from a concert pianist trained at G. Verdi Milan. Apply now.",
  keywords: [
    "piano lessons online",
    "adult piano lessons",
    "private piano teacher",
    "piano mentorship",
    "learn piano online",
    "piano coaching",
  ],
  openGraph: {
    title: "Piano Lessons & Mentorship | Juri Nardelli Academy",
    description:
      "Private online piano lessons for adults. Weekly 1-on-1 with a concert pianist.",
    url: "https://jurinardelli.com/academy",
    images: [
      {
        url: "https://jurinardelli.com/bio/photo-teaching.jpg",
        width: 1200,
        height: 630,
        alt: "Juri Nardelli teaching piano online",
      },
    ],
  },
  alternates: {
    canonical: "https://jurinardelli.com/academy",
  },
};

export default function AcademyPage() {
  return (
    <>
      <JsonLd data={COURSE_JSONLD} />
      <Navbar />
      <main className="bg-black">
        <AcademyFunnel />
      </main>
      <Footer />
    </>
  );
}
