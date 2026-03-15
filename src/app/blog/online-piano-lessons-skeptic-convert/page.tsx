import type { Metadata } from "next";
import { JsonLd } from "@/lib/structured-data";
import OnlinePianoLessonsSkepticConvert from "@/components/articles/OnlinePianoLessonsSkepticConvert";

export const metadata: Metadata = {
  title:
    "I Was Skeptical About Online Piano Lessons. Then I Tried Teaching Them. | Juri Nardelli",
  description:
    "After 4,000+ online piano lessons, a concert pianist shares why he went from skeptic to believer. The camera angle advantage, the comfort factor, and what actually matters.",
  keywords: [
    "online piano lessons",
    "are online piano lessons worth it",
    "online piano teacher",
    "virtual piano lessons",
    "learn piano online",
  ],
  openGraph: {
    title:
      "I Was Skeptical About Online Piano Lessons. Then I Tried Teaching Them.",
    description:
      "After 4,000+ online lessons, a concert pianist shares why he went from skeptic to believer.",
    url: "https://jurinardelli.com/blog/online-piano-lessons-skeptic-convert",
    type: "article",
    publishedTime: "2025-12-01T00:00:00Z",
    authors: ["Juri Nardelli"],
  },
  alternates: {
    canonical:
      "https://jurinardelli.com/blog/online-piano-lessons-skeptic-convert",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "I Was Skeptical About Online Piano Lessons. Then I Tried Teaching Them.",
  description:
    "After 4,000+ online piano lessons, a concert pianist shares why he went from skeptic to believer.",
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
  datePublished: "2025-12-01",
  dateModified: "2025-12-01",
  mainEntityOfPage:
    "https://jurinardelli.com/blog/online-piano-lessons-skeptic-convert",
  image: "https://jurinardelli.com/portrait.jpg",
};

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <OnlinePianoLessonsSkepticConvert />
    </>
  );
}
