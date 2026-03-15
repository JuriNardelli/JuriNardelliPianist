import type { Metadata } from "next";
import { JsonLd } from "@/lib/structured-data";
import BestSoftwareAndAppsForPianoStudents from "@/components/articles/BestSoftwareAndAppsForPianoStudents";

export const metadata: Metadata = {
  title:
    "The Best Software and Apps for Piano Students in 2025 | Juri Nardelli",
  description:
    "A piano teacher reviews the most useful apps for piano students: metronomes, sheet music readers, recording tools, slow-down apps, theory trainers, and Zoom settings for online lessons.",
  keywords: [
    "best apps for piano students",
    "piano practice apps",
    "piano learning software",
    "metronome app piano",
    "sheet music app",
    "piano theory app",
    "zoom settings for piano",
  ],
  openGraph: {
    title: "The Best Software and Apps for Piano Students in 2025",
    description:
      "The tools that actually help piano students: metronomes, sheet music readers, recording tools, and more.",
    url: "https://jurinardelli.com/blog/best-software-and-apps-for-piano-students",
    type: "article",
    publishedTime: "2025-11-15T00:00:00Z",
    authors: ["Juri Nardelli"],
  },
  alternates: {
    canonical:
      "https://jurinardelli.com/blog/best-software-and-apps-for-piano-students",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Best Software and Apps for Piano Students in 2025",
  description:
    "A piano teacher reviews the most useful apps and software for piano students, from metronomes to theory trainers.",
  author: {
    "@type": "Person",
    name: "Juri Nardelli",
    url: "https://jurinardelli.com",
  },
  publisher: {
    "@type": "Person",
    name: "Juri Nardelli",
    url: "https://jurinardelli.com",
  },
  datePublished: "2025-11-15",
  dateModified: "2025-11-15",
  mainEntityOfPage:
    "https://jurinardelli.com/blog/best-software-and-apps-for-piano-students",
  image: "https://jurinardelli.com/portrait.jpg",
};

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <BestSoftwareAndAppsForPianoStudents />
    </>
  );
}
