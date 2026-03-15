import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { BiographyFull } from "@/components/BiographyFull";
import { SaturnGallery } from "@/components/SaturnGallery";
import { Footer } from "@/components/Footer";
import { BiographyCTA } from "@/components/BiographyCTA";
import { JsonLd, PERSON_JSONLD } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Biography | Juri Nardelli - Concert Pianist",
  description:
    "Juri Nardelli's journey from Italy to the international concert stage. Trained at G. Verdi Conservatory Milan, ISSM Siena, and Conservatorium van Maastricht under Igor Roma.",
  keywords: [
    "Juri Nardelli",
    "concert pianist biography",
    "Italian pianist",
    "classical pianist",
  ],
  openGraph: {
    title: "Biography | Juri Nardelli - Concert Pianist",
    description:
      "From Italy to the international concert stage. The story of a classical pianist.",
    url: "https://jurinardelli.com/biography",
    images: [
      {
        url: "https://jurinardelli.com/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Juri Nardelli - Concert Pianist",
      },
    ],
  },
  alternates: {
    canonical: "https://jurinardelli.com/biography",
  },
};

export default function BiographyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...PERSON_JSONLD,
          performerIn: {
            "@type": "Event",
            name: "Rachmaninov Second Piano Concerto - Teatro dei Rinnovati, Siena",
            startDate: "2016-06-21",
          },
          award: [
            "Lamporecchio International Piano Competition",
            "S. Vincenzo Piano Competition",
            "Città di Firenze Piano Competition",
            "Città di Grosseto Piano Competition",
            "Torricelli Scholarship",
            "Vocalis Scholarship",
          ],
        }}
      />
      <Navbar />
      <main className="bg-black">
        <BiographyFull />
        <SaturnGallery />
        <BiographyCTA />
      </main>
      <Footer />
    </>
  );
}
