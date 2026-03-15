import type { Metadata } from "next";
import { JsonLd } from "@/lib/structured-data";
import WhatToLookForInAPianoTeacher from "@/components/articles/WhatToLookForInAPianoTeacher";

export const metadata: Metadata = {
  title:
    "What to Look for in a Piano Teacher (And What to Run From) | Juri Nardelli",
  description:
    "A concert pianist explains how to choose the right piano teacher. Performance experience, teaching flexibility, red flags to watch for, and why online lessons expand your options.",
  keywords: [
    "how to choose a piano teacher",
    "piano teacher red flags",
    "find a piano teacher",
    "good piano teacher",
    "adult piano teacher",
    "online piano teacher",
  ],
  openGraph: {
    title: "What to Look for in a Piano Teacher (And What to Run From)",
    description:
      "How to choose the right piano teacher — performance experience, flexibility, red flags, and why online lessons expand your options.",
    url: "https://jurinardelli.com/blog/what-to-look-for-in-a-piano-teacher",
    type: "article",
    publishedTime: "2025-11-01T00:00:00Z",
    authors: ["Juri Nardelli"],
  },
  alternates: {
    canonical:
      "https://jurinardelli.com/blog/what-to-look-for-in-a-piano-teacher",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Look for in a Piano Teacher (And What to Run From)",
  description:
    "A concert pianist explains how to choose the right piano teacher, including red flags and what makes a great first lesson.",
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
  datePublished: "2025-11-01",
  dateModified: "2025-11-01",
  mainEntityOfPage:
    "https://jurinardelli.com/blog/what-to-look-for-in-a-piano-teacher",
  image: "https://jurinardelli.com/portrait.jpg",
};

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <WhatToLookForInAPianoTeacher />
    </>
  );
}
