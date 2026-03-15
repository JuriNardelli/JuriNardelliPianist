import type { Metadata } from "next";
import { JsonLd } from "@/lib/structured-data";
import HowToPracticePianoEfficiently from "@/components/articles/HowToPracticePianoEfficiently";

export const metadata: Metadata = {
  title:
    "How to Practice Piano Efficiently (From a Teacher Who's Heard Every Excuse) | Juri Nardelli",
  description:
    "A concert pianist and teacher explains why 20 focused minutes beats 2 unfocused hours. Slow practice, the three-pass method, and mental practice techniques that actually work.",
  keywords: [
    "how to practice piano",
    "piano practice tips",
    "efficient piano practice",
    "slow practice piano",
    "piano practice routine",
    "adult piano practice",
  ],
  openGraph: {
    title:
      "How to Practice Piano Efficiently (From a Teacher Who's Heard Every Excuse)",
    description:
      "Why 20 focused minutes beats 2 unfocused hours. Slow practice, the three-pass method, and techniques that actually work.",
    url: "https://jurinardelli.com/blog/how-to-practice-piano-efficiently",
    type: "article",
    publishedTime: "2026-02-01T00:00:00Z",
    authors: ["Juri Nardelli"],
  },
  alternates: {
    canonical:
      "https://jurinardelli.com/blog/how-to-practice-piano-efficiently",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Practice Piano Efficiently (From a Teacher Who's Heard Every Excuse)",
  description:
    "A concert pianist explains why 20 focused minutes beats 2 unfocused hours, with practical techniques for effective practice.",
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
  datePublished: "2026-02-01",
  dateModified: "2026-02-01",
  mainEntityOfPage:
    "https://jurinardelli.com/blog/how-to-practice-piano-efficiently",
  image: "https://jurinardelli.com/portrait.jpg",
};

export default function ArticlePage() {
  return (
    <>
      <JsonLd data={articleJsonLd} />
      <HowToPracticePianoEfficiently />
    </>
  );
}
