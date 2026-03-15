import type { Metadata } from "next";
import { JsonLd } from "@/lib/structured-data";
import BestSetupForOnlinePianoLessons from "@/components/articles/BestSetupForOnlinePianoLessons";

export const metadata: Metadata = {
  title:
    "The Best Setup for Online Piano Lessons (From Someone Who's Taught 4,000+ of Them) | Juri Nardelli",
  description:
    "A concert pianist shares the ideal camera, microphone, lighting, and software setup for online piano lessons. Budget and ideal options, plus Zoom settings that actually preserve piano sound.",
  keywords: [
    "online piano lesson setup",
    "best camera for piano lessons",
    "microphone for piano lessons",
    "zoom settings for music",
    "online piano lesson equipment",
    "piano lesson technology",
  ],
  openGraph: {
    title:
      "The Best Setup for Online Piano Lessons (From Someone Who's Taught 4,000+ of Them)",
    description:
      "Camera, microphone, lighting, and software settings for online piano lessons — from budget to ideal.",
    url: "https://jurinardelli.com/blog/best-setup-for-online-piano-lessons",
    type: "article",
    publishedTime: "2026-01-01T00:00:00Z",
    authors: ["Juri Nardelli"],
  },
  alternates: {
    canonical:
      "https://jurinardelli.com/blog/best-setup-for-online-piano-lessons",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Best Setup for Online Piano Lessons (From Someone Who's Taught 4,000+ of Them)",
  description:
    "A concert pianist shares the ideal camera, microphone, lighting, and software setup for online piano lessons.",
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
  datePublished: "2026-01-01",
  dateModified: "2026-01-01",
  mainEntityOfPage:
    "https://jurinardelli.com/blog/best-setup-for-online-piano-lessons",
  image: "https://jurinardelli.com/portrait.jpg",
};

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <BestSetupForOnlinePianoLessons />
    </>
  );
}
